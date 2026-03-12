# 🗃️💁 TextureUnpacker Example

## Overview

[TextureUnpacker](https://github.com/pavle-goloskokovic/texture-unpacker) is a Node.js tool written in TypeScript which can be used to unpack `.png` sprite sheets packed with [TexturePacker](https://www.codeandweb.com/texturepacker/) into separate sprites if provided with corresponding `.json` or `.plist` data file.

## Installation

```bash
# install globally (optional, requires npm permissions)
npm install -g texture-unpacker

# or add to a project and run the tool locally
npm install texture-unpacker
```

## Example

The commands shown below assume that `texture-unpacker` has been installed locally in your project (for example, with `npm install texture-unpacker`), so we prefix invocations with `npx`. If you prefer to install the CLI globally (`npm install -g texture-unpacker`), you can omit `npx` and run `texture-unpacker` directly. For the purpose of this example the package is installed locally and the `npx` form is used.

We have sprite sheet and data files `Sprite.png`, `Sprite.json`, and `Sprite.plist` available in the `sheets` directory. The tool assumes that sprite sheet and data files have the same name with different extensions.

Running the command below will read `json` data file, create `Sprite` directory at the same level as the sprite sheet file, and populate it with individual sprites:

### Command-line
```bash
npx texture-unpacker -s sheets/Sprite.png -f json
```

### Programmatic API (CommonJS)
```js
const { unpack } = require('texture-unpacker');
unpack('sheets/Sprite.png', {
    format: 'json'
}).then(() => {
    console.log('Texture unpacked.');
});
```

### Programmatic API (TypeScript/ESM)
```ts
import { unpack } from 'texture-unpacker';
import type { UnpackOptions } from 'texture-unpacker';

unpack('sheets/Sprite.png', {
    format: 'json'
} as UnpackOptions).then(() => {
    console.log('Texture unpacked.');
});
```

In case we have multiple data files available, like in this example, you can explicitly provide `plist` as the format argument to give it precedence:

### Command-line
```bash
npx texture-unpacker -s sheets/Sprite.png -f plist
```

### Programmatic API (CommonJS)
```js
const { unpack } = require('texture-unpacker');
unpack('sheets/Sprite.png', {
    format: 'plist'
}).then(() => {
    console.log('Texture unpacked.');
});
```

### Programmatic API (TypeScript/ESM)
```ts
import { unpack } from 'texture-unpacker';
import type { UnpackOptions } from 'texture-unpacker';

unpack('sheets/Sprite.png', {
    format: 'plist'
} as UnpackOptions).then(() => {
    console.log('Texture unpacked.');
});
```

Omitting the format argument in the command above will use `json` data since it is the default expected format:

### Command-line
```bash
npx texture-unpacker -s sheets/Sprite.png
```

### Programmatic API (CommonJS)
```js
const { unpack } = require('texture-unpacker');
unpack('sheets/Sprite.png')
  .then(() => {
    console.log('Texture unpacked.');
  });
```

### Programmatic API (TypeScript/ESM)
```ts
import { unpack } from 'texture-unpacker';

unpack('sheets/Sprite.png')
  .then(() => {
    console.log('Texture unpacked.');
  });
```

In case you have only `plist` data file available, the above command would work the same since the tool can automatically detect available data file.

You can also omit the sprite sheet extension `.png` when running the tool for the same effect:

### Command-line
```bash
npx texture-unpacker -s sheets/Sprite
```

### Programmatic API (CommonJS)
```js
const { unpack } = require('texture-unpacker');
unpack('sheets/Sprite')
  .then(() => {
    console.log('Texture unpacked.');
  });
```

### Programmatic API (TypeScript/ESM)
```ts
import { unpack } from 'texture-unpacker';

unpack('sheets/Sprite')
  .then(() => {
    console.log('Texture unpacked.');
  });
```

Providing directory path as the input path will scan provided directory for `.png` sprite sheets with accompanying data files to unpack:

### Command-line
```bash
npx texture-unpacker -s sheets
```
Note that providing `sheets/Sprite` as the input path will give priority to `sheets/Sprite.png` sprite sheet file, rather than to the generated `sheets/Sprite` directory, to avoid undesired behavior if you run the tool repeatedly.

And finally, omitting the input path argument completely will scan the entire project structure to find all available `.png` sprite sheets with accompanying data files to unpack:

### Command-line
```bash
texture-unpacker
```

If you want to override the default data path, you can pass a custom one as an argument:

### Command-line
```bash
npx texture-unpacker -s sheets/Sprite -d sheets/Sprite_custom.json
```

### Programmatic API (CommonJS)
```js
const { unpack } = require('texture-unpacker');
unpack('sheets/Sprite', {
    data: 'sheets/Sprite_custom.json'
}).then(() => {
    console.log('Texture unpacked.');
});
```

### Programmatic API (TypeScript/ESM)
```ts
import { unpack } from 'texture-unpacker';
import type { UnpackOptions } from 'texture-unpacker';

unpack('sheets/Sprite', {
    data: 'sheets/Sprite_custom.json'
} as UnpackOptions).then(() => {
    console.log('Texture unpacked.');
});
```
Note that custom data file path must include file extension, and if data format is also passed it will be ignored.

If you want to override the default output path, you can pass a custom one as an argument:

### Command-line
```bash
npx texture-unpacker -s sheets/Sprite -o sheets/Sprite_unpacked
```

### Programmatic API (CommonJS)
```js
const { unpack } = require('texture-unpacker');
unpack('sheets/Sprite', {
    output: 'sheets/Sprite_unpacked'
}).then(() => {
    console.log('Texture unpacked.');
});
```

### Programmatic API (TypeScript/ESM)
```ts
import { unpack } from 'texture-unpacker';
import type { UnpackOptions } from 'texture-unpacker';

unpack('sheets/Sprite', {
    output: 'sheets/Sprite_unpacked'
} as UnpackOptions).then(() => {
    console.log('Texture unpacked.');
});
```

If you want to clean the output directory before unpacking you can indicate that by passing another argument:

### Command-line
```bash
npx texture-unpacker -s sheets/Sprite -c
```

### Programmatic API (CommonJS)
```js
const { unpack } = require('texture-unpacker');
unpack('sheets/Sprite', {
    clean: true
}).then(() => {
    console.log('Texture unpacked.');
});
```

### Programmatic API (TypeScript/ESM)
```ts
import { unpack } from 'texture-unpacker';
import type { UnpackOptions } from 'texture-unpacker';

unpack('sheets/Sprite', {
    clean: true
} as UnpackOptions).then(() => {
    console.log('Texture unpacked.');
});
```
