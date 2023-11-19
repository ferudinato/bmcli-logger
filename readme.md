## bmcli-logger
A simply logger to bring up a customized messages for your application

### Usage
Import `customLogger` into your project, like this:
```typescript
import customLogger from 'bmcli-logger';
```

Then, call the method as you need in order to show a message through the console.
```typescript
customLogger.info('This is an information message');

customLogger.warning('This message should be displayed in another color');

customLogger.error('an error message will be displayed in red');
```

Take into account that this package is a web-based tool recommended.
