const { unpack } = require('texture-unpacker');

// Equivalent to:
// npx texture-unpacker -s sheets/Sprite -c

unpack('sheets/Sprite', { // Directory or sprite sheet path/name
    clean: true           // Clean the output directory before unpacking
}).then(() => {
    console.log('Texture unpacked.');
});
