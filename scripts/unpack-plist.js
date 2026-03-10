const { unpack } = require('texture-unpacker');

// Equivalent to:
// npx texture-unpacker -s sheets/Sprite.png -f plist

unpack('sheets/Sprite.png', { // Directory or sprite sheet path/name
    format: 'plist'           // Data format type ('json' or 'plist')
}).then(() => {
    console.log('Texture unpacked.');
});
