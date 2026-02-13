---
title: "mmuctf 2025 writeup"
description: "mmuctf 2025 challenges writeup"
date: "2025-08-03"
badge: "CTF"
---

Over the weekend, I had the opportunity to participate in the mmuctf 2025. It was an individual jeopardy style CTF targeted towards beginners and intermediate people in cybersecurity. This is a write-up to explore some challenges I did, or at least almost did.

## Welcome

> Through the shadows of the cave, at the door I had a zeal to get a welcome flag, but I couldn't see it though I could hear it calling for me to get it. Happy hacking

This was a sanity check flag. The challenge description talked about the `door`, my first instinct was to view the source of the front page. I got this html comment with what looked like a base64 encoded string `<!--bW11Y3Rme3dlbGNvbWVfZmxhZ19hZGlvc19NdWNoQGNob30= -->`

```zsh
┌──(mockingspectre㉿blackout)-[~/ctf/mmuctf2025]
└─$ echo -n "bW11Y3Rme3dlbGNvbWVfZmxhZ19hZGlvc19NdWNoQGNob30=" | base64 -d
mmuctf{welcome_flag_adios_Much@cho}
```

## My First App

> Our intern dev swears this app's secure...

This was a web challenge with an account creation form. Let's fire up Burp. The account creation request didn't seem suspicious for now, so I sent it to the repeater to abuse it some more. The response seemed interesting, the user id was in the query parameter: `GET /profile.php?id=5 HTTP/1.1`. This was a nice candidate for an Insecure Direct Object Reference(IDOR). I tried repeating the request with values from 0-4. The flag was at 1, the admin user's account.

```txt
mmuctf{1d0r_4dm1n_4cc3ss_1s_c0mpr0m1s3d}
```

## Ledilect

> Sometimes the path you take is just a jump away.

This was a simple one, I knew what the challenge wanted, but I couldn't get myself to exploit it, definitely a skill issue. The webapp had a landing page that had a button that made this request:

```txt
GET /portal/jump.php?url=https://example.com HTTP/1.1
Host: redacted
```

Looking at that, I suspected an open redirect vulnerability, but I don't know anything about this bug class. I let it rest.

## Meet my X

This challenge involved homoglyphs — a character or a sequence of characters that looks very similar or identical to another character or sequence of characters, but has a different meaning, encoding, or origin.

A sentence might look normal, but if you copy it into a text editor that shows Unicode details or a specialized homoglyph detector, you'll see different underlying character codes.

I used these online decoders, https://wulfsige.com/crypto/ and https://holloway.nz/steg/ to get the flag:

```txt
mmuctf{oops_twitter_steg_1s_fun}
```

## Shadow

> Look beyond the appearance, perhaps their numerical essence will guide you to the flag. Can you reveal what lurks in the shadow?

This was another stego challenge; there is an image with what looks like a color palette. The description hints at 'numerical essence', so it might be something to deal with the hex values of the colors. I used https://imagecolorpicker.com/ to extract the hex values.

```txt
#6d6d75
#637466
#7b346c
#773479
#355f68
#316464
#336e5f
#316e35
#64335f
#6d337d
```

Decoded becomes

```txt
mmuctf{4lw4y5_h1dd3n_1n5d3_m3}
```

## Revealme

> We found this mysterious executable on an old USB stick... Can you figure out how to get it to reveal the flag?

The provided file is an ELF executable binary.

```zsh
┌──(mockingspectre㉿blackout)-[~/ctf/mmuctf2025]
└─$ file revealme
revealme: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=d8546bb2c10c0226384fb2771684af9bc150b55e, for GNU/Linux 3.2.0, stripped
```

```zsh
┌──(mockingspectre㉿blackout)-[~/ctf/mmuctf2025]
└─$ checksec --file=revealme
RELRO           STACK CANARY      NX            PIE             RPATH      RUNPATH      Symbols         FORTIFY
Partial RELRO   No canary found   NX enabled    PIE enabled     No RPATH   No RUNPATH   No Symbols        No
```

Opening it with Binary Ninja gives us a quick win — the flag is hardcoded in the binary:

```asm
004011e9  4889c7  mov  rdi, rax  {data_402038, "Correct! The flag is: mmuctf{r3v3rs1ng_st4rt3r}"}
```

Flag:

```txt
mmuctf{r3v3rs1ng_st4rt3r}
```

## Flicker

> An ordinary looking Android app... or is it?

The provided app is an Android APK. Let's fire up jadx-gui. The package name is `com.example.blink`. There is an interesting class `r2d2`. In the onCreate method, there is an image string variable that seems to contain base64 image data.

```zsh
┌──(mockingspectre㉿blackout)-[~/ctf/mmuctf2025]
└─$ cat output.txt | base64 -d > decoded_image.png
```

Flag:

```txt
CTF{PUCKMAN}
```

## Open_Secrets

> Someone trusted the wrong site and network didn't forget. Can you piece together what was left behind? Some people still think locks are optional on digital doors.

The provided file was a network capture pcap file. The challenge title and filename hint at unencrypted traffic. Open up Wireshark and apply an HTTP filter. There is an HTTP stream that leaks the flag:

```txt
mmuctf{plaintext_login_leak}
```

## C-x C-s

> Ugh, I keep typing ^x ^s in my shell instead of saving, should've stuck with Emacs

This one made me mad. The provided file is a PCAP file. Another network forensics challenge, or so I thought.

I opened the file with Wireshark and noticed a new kind of communication — USB traffic. Each URB_INTERRUPT in the file corresponds to a key pressed, and the Leftover Capture Data field shows the hex value of the key in 8-byte format.

Creating a filter to list all interrupt communication with non-empty 8 bytes:

```txt
usb.transfer_type == 0x01 && usb.dst == "host" && !(usb.capdata == 00:00:00:00:00:00:00:00)
```

Crafting a tshark command to extract the data:

```zsh
tshark -r thekey.pcapng -Tfields -Eseparator=, -e usb.capdata -Y 'usb.transfer_type == 0x01 && usb.dst == "host" && !(usb.capdata == 00:00:00:00:00:00:00:00)' | sed 's/://g' > usb.capdata
```

I wrote a Python script to decode the hex values to key names, but the output appeared to be Vim motions. I wasn't able to fully decipher this to a correct flag.

These are the challenges I had the time to tackle. If you have any insights or suggestions, share them in the comments.
