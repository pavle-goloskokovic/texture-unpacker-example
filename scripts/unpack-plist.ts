import { unpack } from 'texture-unpacker';
import type { UnpackOptions } from 'texture-unpacker';

// Equivalent to:
// npx texture-unpacker -s sheets/Sprite.png -f plist

unpack('sheets/Sprite.png', { // Directory or sprite sheet path/name
    format: 'plist'           // Data format type ('json' or 'plist')
} as UnpackOptions).then(() => {
    console.log('Texture unpacked.');
});
