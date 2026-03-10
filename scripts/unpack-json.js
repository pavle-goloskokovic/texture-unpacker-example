const { unpack } = require('texture-unpacker');

// Equivalent to:
// npx texture-unpacker -s sheets/Sprite.png -f json

unpack('sheets/Sprite.png', { // Directory or sprite sheet path/name
    format: 'json'            // Data format type ('json' or 'plist')
}).then(() => {
    console.log('Texture unpacked.');
});
