
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
        id: '444324'
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
        id: '444545454324'
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
        id: '4445355343324'
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
        id: '4443645654654624'
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
        id: '445385437594354324'
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
        id: '444353454353424'
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
        id: '445654644324'
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
        id: '4443253534535345344'
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
        id: '44554353454324'
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
        id: '44443744237894237324'
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
        id: '444354353453453424'
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
        id: '44453453443534534534324'
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
        id: '44443423423423324'
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
        id: '4444343432423432324'
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
        id: '44442343432432423324'
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
        id: '4443443432423423424'
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
        id: '4443555344353424'
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
        id: '44443343443343324'
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
        id: '45345345345345345344324'
    }
];

module.exports = objStore;