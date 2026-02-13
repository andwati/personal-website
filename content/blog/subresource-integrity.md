---
title: "Subresource Integrity"
description: "Understanding Subresource Integrity"
date: "2023-04-29"
badge: "Security"
---

Understanding Subresource Integrity

In my junior year while I was learning HTML and CSS I got to use the Bootstrap css library. The easiest way to obtain the files was from a Content Delivery Network(CDN). I could see links such as:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
  crossorigin="anonymous"
/>
```

I didn't bother with the `integrity` attribute of the link(guess I wasn't curious enough). The integrity attribute has a cryptographic hash value that is important in CDNs and its called the Subresource Integrity.

Subresource Integrity (SRI) is a security feature in web browsers that helps prevent malicious or compromised scripts from being loaded and executed on a website. It is a security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match.

When a resource, such as a script or stylesheet, fails the SRI check, the browser will block the resource from being loaded and displayed on the website.

## How Subresource Integrity Helps

SRI helps protect against supply chain attacks where a CDN or third-party host is compromised. By verifying the hash of the fetched resource, the browser ensures the content hasn't been tampered with.

## Using it

To use SRI, you add an `integrity` attribute to the `<script>` or `<link>` element containing a base64-encoded cryptographic hash of the resource.

## Tools for generating SRI hashes

You can generate SRI hashes using the `openssl` command-line tool or online tools like [srihash.org](https://www.srihash.org/).

```sh
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

## Cross-Origin Resource Sharing and Subresource Integrity

For SRI to work with resources loaded from a different origin, the server must include the `Access-Control-Allow-Origin` header. The `crossorigin="anonymous"` attribute is also required on the element.

## How browsers handle Subresource Integrity

When a browser encounters an element with an `integrity` attribute, it:
1. Fetches the resource
2. Computes the hash of the fetched resource
3. Compares the computed hash with the one specified in the `integrity` attribute
4. If they match, the resource is used; if not, it's blocked

## References

- [MDN Web Docs - Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
- [W3C Subresource Integrity Specification](https://www.w3.org/TR/SRI/)
