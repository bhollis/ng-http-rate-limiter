# Rate limit $http calls in Angular

`ng-http-rate-limiter` allows you to limit calls to particular URL patterns such that they only occur under a maximum rate per second. If you issue calls faster than that, the rate limiter will delay calls to maintain the chosen rate. You can configure multiple rate limiter configs, each of which match a different URL pattern and maintain their own queue.

This code was extracted from [Destiny Item Manager](https://github.com/DestinyItemManager/DIM), and is intended for use with Angular 1.

[![NPM version](https://img.shields.io/npm/v/ng-http-rate-limiter.svg)](https://www.npmjs.com/package/ng-http-rate-limiter) [![Bower version](https://img.shields.io/bower/v/ng-http-rate-limiter.svg)](http://bower.io/search/?q=ng-http-rate-limiter) [![Build Status](https://img.shields.io/travis/bhollis/ng-http-rate-limiter.svg)](https://travis-ci.org/bhollis/ng-http-rate-limiter)

# Usage

`ng-http-rate-limiter` is available for use directly, via AMD (RequireJS), or in NodeJS. It is installable as `ng-http-rate-limiter` from either NPM or Bower.

```javascript
var myModule = angular.module('myapp', ['ngHttpRateLimiter']);

myModule
  .config(["ngHttpRateLimiterProvider", function(rateLimiterConfigProvider) {
    // No more than one request to slowdomain.com every second
    rateLimiterConfigProvider.addLimiter(/slowdomain.com/, 1, 1000);
    // Send a maximum of three requests in any given 5 second period to a particular API
    rateLimiterConfigProvider.addLimiter(/api.com\/limited-api\//, 3, 5000);
  }])
  .config(["$httpProvider", function($httpProvider) {
    // Install the interceptor
    $httpProvider.interceptors.push("ngHttpRateLimiterInterceptor");
  }]);
```

# Developing

First, install NodeJS however you like for your system (on OSX, I use `brew install node`).

Then check out and build the project:

```bash
npm install -g grunt-cli
git clone https://github.com/bhollis/ng-http-rate-limiter
cd ng-http-rate-limiter
npm install
grunt
```

## License

Copyright (c) 2016 Benjamin Hollis. MIT Licensed, see [MIT-LICENSE.txt](https://github.com/bhollis/ng-http-rate-limiter/blob/master/MIT-LICENSE.txt) for details.
