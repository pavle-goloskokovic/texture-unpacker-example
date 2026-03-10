import { unpack } from 'texture-unpacker';
import type { UnpackOptions } from 'texture-unpacker';

// Equivalent to:
// npx texture-unpacker -s sheets/Sprite -o sheets/Sprite_unpacked

unpack('sheets/Sprite', {            // Directory or sprite sheet path/name
    output: 'sheets/Sprite_unpacked' // Custom output directory path
} as UnpackOptions).then(() => {
    console.log('Texture unpacked.');
});
