import { unpack } from 'texture-unpacker';

// Equivalent to:
// npx texture-unpacker -s sheets/Sprite.png

unpack('sheets/Sprite.png') // Directory or sprite sheet path/name
    .then(() => {
        console.log('Texture unpacked.');
    });
