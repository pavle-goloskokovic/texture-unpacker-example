import { unpack } from 'texture-unpacker';
import type { UnpackOptions } from 'texture-unpacker';

// Equivalent to:
// npx texture-unpacker -s sheets/Sprite -d sheets/Sprite_custom.json

unpack('sheets/Sprite', {             // Directory or sprite sheet path/name
    data: 'sheets/Sprite_custom.json' // Custom data file path
} as UnpackOptions).then(() => {
    console.log('Texture unpacked.');
});
