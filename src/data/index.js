
const objStore =  [
    {
        name: 'email',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'i am here to help',
        priority: '1',
        handle: 'cb-dev-help',
        handler: "openwhisk",
    },
    {
        name: 'facebook',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'Lets sing',
        priority: '1',
        handle: 'cb-dev-music',
        handler: "openwhisk",
    },
    {
        name: 'facetime',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'Let me talk',
        priority: '1',
        handle: 'cb-dev-marketing',
        handler: "openwhisk",
    },
    {
        name: 'telegram',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I price',
        priority: '1',
        handle: 'cb-dev-pricing',
        handler: "openwhisk",
    },
    {
        name: 'phone',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I talk a lot',
        priority: '1',
        handle: 'cb-dev-sales',
        handler: "openwhisk",
    },
    {
        name: 'text message',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I will sign you up',
        priority: '1',
        handle: 'cb-dev-registrar',
        handler: "openwhisk",
    },
    {
        name: 'whatsapp',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I generally get things done',
        priority: '1',
        handle: 'cb-dev-general',
        handler: "openwhisk",
    },
    {
        name: 'twitter',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I bring order to chaos',
        priority: '1',
        handle: 'cb-dev-chaoticbot',
        handler: "openwhisk",
    },
    {
        name: 'skype',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I am the elegant close',
        priority: '1',
        handle: 'cb-dev-close',
        handler: "openwhisk",
    },
    {
        name: 'we chat',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'},
            {
                skillname:  'startit',
                skilltype: 'system',
                skillsource: 'system'}],
        greeting: 'This is a testing agent -- call me whenever',
        priority: '1',
        handle: 'cb-dev-echo',
        handler: "openwhisk",
    },
    {
        name: 'line',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname: 'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'}
        ],
        greeting: 'What can I send you?',
        priority: '1',
        handle: 'cb-dev-content',
        handler: "openwhisk",
    },
    {
        name: 'snapchat',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I am here to help',
        priority: '1',
        handle: 'cb-dev-morehelp',
        handler: "openwhisk",
    },
    {
        name: 'kakao talk',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I am your support bot',
        priority: '1',
        handle: 'cb-dev-support',
        handler: "openwhisk",
    },
    {
        name: 'reddit pm',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'Let me connect you with a live agent',
        priority: '1',
        handle: 'cb-dev-live',
        handler: "openwhisk",
    },
    {
        name: 'google hangout',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I handle all returns',
        priority: '1',
        handle: 'cb-dev-return',
        handler: "openwhisk",
    },
    {
        name: 'hip chat',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'There is no better proof',
        priority: '1',
        handle: 'cb-dev-proof',
        handler: "openwhisk",
    },
    {
        name: 'slack',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I mediate things -- like trying to connect you with another agent',
        priority: '1',
        handle: 'cb-dev-mediator',
        handler: "openwhisk",
    },
    {
        name: 'IM',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I will complete the purchase for you',
        priority: '1',
        handle: 'cb-dev-purchase',
        handler: "openwhisk",
    },
    {
        name: 'messanger',
        avatar: 'https://www.gravatar.com/avatar/',
        skills: [{
            skillname:  'echo',
            skilltype: 'api',
            skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
        }],
        greeting: 'I take payments - cash or credit. No bitcoin',
        priority: '1',
        handle: 'cb-dev-payor',
        handler: "openwhisk",
    }
];

module.exports = objStore;