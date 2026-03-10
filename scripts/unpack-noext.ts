import { unpack } from 'texture-unpacker';

// Equivalent to:
// npx texture-unpacker -s sheets/Sprite

unpack('sheets/Sprite') // Directory or sprite sheet path/name (no extension)
.then(() => {
    console.log('Texture unpacked.');
});
