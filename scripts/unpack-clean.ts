import { unpack } from 'texture-unpacker';
import type { UnpackOptions } from 'texture-unpacker';

// Equivalent to:
// npx texture-unpacker -s sheets/Sprite -c

unpack('sheets/Sprite', { // Directory or sprite sheet path/name
    clean: true           // Clean the output directory before unpacking
} as UnpackOptions).then(() => {
    console.log('Texture unpacked.');
});
