---
title: "Install PostgreSQL on Arch | Manjaro | Garuda Linux"
description: "Getting PostgreSQL up and running on Arch Linux-based distros"
date: "2023-02-16"
badge: "Tutorial"
---

# Overview

**PostgreSQL** is a powerful open-source relational database management system (RDBMS) that allows you to store and manage large amounts of data. It was first released in 1996 and has become one of the most popular RDBMSs in the world.

PostgreSQL is designed to handle high levels of **concurrency**, providing features such as **MVCC (multi-version concurrency control)** that allow multiple users to access the same data simultaneously without conflicts. It is also **highly extensible**, with a large number of third-party extensions and libraries available that can be used to add functionality to the core database.

Some of the key features of PostgreSQL include support for **complex SQL queries**, **advanced indexing** and **query optimization**, **transactional integrity**, and support for a **wide range of programming languages** and development frameworks.

In this tutorial, we'll look at how to install PostgreSQL on Arch Linux, Manjaro, Garuda Linux, or any other Arch-based distro out there.

# PostgreSQL use cases

- **E-commerce websites:** PostgreSQL is a popular choice for e-commerce websites because it can handle large amounts of data and supports complex queries.
- **Financial institutions:** PostgreSQL is used in financial institutions to store and manage transactional data, such as stock trades, bank transfers, and credit card transactions.
- **Healthcare industry:** PostgreSQL is used in the healthcare industry to store patient data, such as medical records and diagnostic test results.
- **Government agencies:** PostgreSQL is used by government agencies for managing large datasets, storing and analyzing census data.
- **Mobile and web applications:** PostgreSQL is often used as a back-end database for mobile and web applications.
- **Geospatial applications:** PostgreSQL has built-in support for geospatial data and is often used for applications that require location-based data.

# Why PostgreSQL?

Postgres offers a lot of advantages that make it an excellent choice for highly transactional environments regardless of application size and data volume. Some of the top features are:

- **ACID Compliance:** Provides high reliability, consistency, and data integrity.
- **Extensibility:** Highly extensible with a large extension framework.
- **Concurrency:** Multi-Version Concurrency Control (MVCC) for fast and reliable access.
- **Full-text search:** Powerful full-text search engine with advanced capabilities.
- **Advanced indexing:** B-tree, Hash, GiST, SP-GiST, GIN, and BRIN indexing options.
- **JSON support:** Native support for storing and querying JSON data.
- **Security:** SSL support, client authentication, and role-based access control.
- **Scalability:** Designed to scale horizontally and vertically.

# Install PostgreSQL on Arch | Manjaro | Garuda Linux

Now with all that fluff out of the way, let's get to business. The steps have been tested on Arch Linux with the KDE desktop.

> **Note:** Commands that should be run as the *postgres* user are prefixed by `[postgres]$` in this article.

## Step 1: Installing the PostgreSQL Package

```sh
sudo pacman -Syu postgresql
```

This command will update the package database and update all packages on the system then install the PostgreSQL package from your distribution mirrors. Never install a package without updating the system first. On a rolling release, this can lead to an unbootable system. Installing the package will also create a system user called *postgres*.

You can switch to the PostgreSQL user by executing the following command:

- If you have sudo and are in sudoers

  ```sh
  sudo -iu postgres
  ```

- Otherwise using su:

  ```sh
  su
  su -l postgres
  ```

## Step 2: Initial Configuration

Before PostgreSQL can function correctly, the database cluster must be initialized.

### 2.1 We can confirm the installed PostgreSQL version by running

```sh
postgres --version
postgres (PostgreSQL) 15.1
```

### 2.2 Set applicable entries in /etc/locale.gen

```sh
echo "en_US.UTF-8 UTF-8" | sudo tee /etc/locale.gen
```

### 2.3 Then run locale-gen to generate locale settings

```sh
sudo locale-gen
Generating locales...
  en_US.UTF-8... done
Generation complete.
```

### 2.4 Initialize Postgres Data Directory

You must first log in as the **postgres** user using the following command before you can initialize PostgreSQL's data directory:

```sh
sudo su - postgres
```

### 2.5 With the following command, you can now initialize PostgreSQL's data directory

```sh
[postgres]$ initdb -D /var/lib/postgres/data
```

### 3.1 Check PostgreSQL status with the following command

```sh
systemctl status postgresql
```

### 3.2 Start the PostgreSQL service by running the following command

```sh
sudo systemctl start postgresql
```

### 3.3 Enable the PostgreSQL service to start automatically at boot

```sh
sudo systemctl enable postgresql
```

### 3.4 Verify that PostgreSQL is running

```sh
sudo systemctl status postgresql
```

### Change postgres user password

To change the postgres user password execute the following command:

```sh
sudo -u postgres psql -c "ALTER USER postgres PASSWORD '$PGPASSWORD';"
```

# Resources

- [Arch Linux Wiki](https://wiki.archlinux.org/title/PostgreSQL)
- [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

# Conclusion

Installing PostgreSQL on Arch Linux-based distribution is a straightforward process that can be completed in just a few steps. By following the steps outlined above, you can install, configure, and start the PostgreSQL database server on your Arch Linux system. Once installed, you can use PostgreSQL to store, manage, and query data for a wide range of applications and use cases.

You can connect to the PostgreSQL server using the psql command-line client or a graphical tool such as pgAdmin.
