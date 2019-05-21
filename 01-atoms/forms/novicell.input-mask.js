'use strict';
import maskInput from 'vanilla-text-mask';

/**
 * @name Novicell Input Mask
 * @desc A script that inits vanilla-text-mask.js with default Novicell settings
 * @author Bjørn Nyborg (BNY)
 * @example <input class="mask--phone">
 * @requires https://github.com/text-mask/text-mask/tree/master/vanilla
 */

const masks = [
    {
        selector: '.js-mask--phone',
        mask: [ /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/ ],
        pattern: ''
    },
    {
        selector: '.js-mask--cpr',
        mask: [ /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/ ],
        pattern: ''
    },
    {
        selector: '.js-mask--bank',
        mask: [ /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/ ],
        pattern: ''
    },
    {
        selector: '.js-mask--date1',
        mask: [ /[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ ],
        pattern: ''
    }
];

for (let i = 0; i < masks.length; i++) {
    const input = document.querySelector(masks[ i ].selector);
    const mask = masks[ i ].mask;
    const pattern = masks[ i ].pattern;

    if (input && mask) {
        // Patterns is work in progress
        if (pattern) {
            input.setAttribute('pattern', pattern);
        }

        masks[ i ].masking = maskInput({
            inputElement: input,
            mask,
            guide: false
        });
    }
}

// Calling `vanillaTextMask.maskInput` adds event listeners to the input element.
// If you need to remove those event listeners, you can call: maskedInputController.destroy()
