[![Build Status](https://travis-ci.org/thaliproject/thali-acl-express.svg)](https://travis-ci.org/thaliproject/thali-acl-express)

# thali-acl-express The Express API for managing ACLs for Thali #

This is the [express](http://expressjs.com/) API for managing ACLs for the Thali Project.  This provides access to the [thali-acl]https://github.com/thaliproject/thali-acl) database  
which uses the ACL PouchDB database via the [node_acl_pouchdb](https://github.com/thaliproject/node_acl_pouchdb) project.  

This gives the user the ability to do the following:
- Add roles
- Add users to roles
- Remove roles
- Remove users from roles
- Determine whether the user has a role
- Get a list of roles per user
- Get a list of users per role

Follow [@ThaliProject](https://twitter.com/thaliproject) for updates about this library.

# Installation #

```bash
$ npm install thali-acl-express
```

# LICENSE #

The MIT License (MIT)

Copyright (c) 2015 Microsoft Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
