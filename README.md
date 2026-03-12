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

Examples assume a local install (e.g. `npm install texture-unpacker`) and therefore use `npx`. With a global install (`npm install -g texture-unpacker`) you may invoke `texture-unpacker` directly.

The `sheets` directory contains `Sprite.png` along with matching `Sprite.json` and `Sprite.plist` data files; the tool expects the same base name with different extensions.

Executing the example below (CLI or programmatic API) reads the `json` file, creates a `Sprite` directory beside the sheet, and writes out individual sprites:

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

When no format is specified the tool assumes JSON data, looking first for a same‑name `.json` and automatically falling back to `.plist` if the JSON is absent (so if only a plist file exists it will be detected and used):

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

The `.png` extension is optional; when omitted, the tool will automatically try to resolve the base name to a `.png` sheet file, so you can supply just the name without extension:

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

Pointing `-s` at a directory scans it for `.png` sheets with matching data files:

### Command-line
```bash
npx texture-unpacker -s sheets
```
If you specify `sheets/Sprite`, the tool prefers `sheets/Sprite.png` over the folder of same name to avoid recursive runs.

Omitting `-s` scans the whole project for sheets and data files:

### Command-line
```bash
npx texture-unpacker
```

To use a custom data file instead of the default same‑name JSON/PLIST, specify its path with the `-d` option. The path must include the file extension (the format is then inferred and any passed `-f` flag is ignored):

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

If you’d like the unpacked sprites to go somewhere other than the default same‑name folder, specify a custom output directory with `-o`. The path may point to an existing directory or a new one, which will be created:

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

If you want the tool to remove any existing files in the target output directory before unpacking, enable cleaning by providing the `-c` flag:

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

> **Tip:** the `package.json` in this project includes a set of `unpack:cli:*` scripts that run the same command‑line examples shown above, plus matching `unpack:js:*` and `unpack:ts:*` targets that execute the corresponding JavaScript/TypeScript files from the `scripts/` folder. You can run or inspect those scripts for quick reproduction of any sample or as a starting point for your own code.
