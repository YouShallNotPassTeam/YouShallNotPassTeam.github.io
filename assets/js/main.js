(function() {

  /*
                            _           _ _               _                          _
                         | |         | | |             | |                        | |
  _   _  ___  _   _   ___| |__   __ _| | |  _ __   ___ | |_    _ __   __ _ ___ ___| |
 | | | |/ _ \| | | | / __| '_ \ / _` | | | | '_ \ / _ \| __|  | '_ \ / _` / __/ __| |
 | |_| | (_) | |_| | \__ \ | | | (_| | | | | | | | (_) | |_   | |_) | (_| \__ \__ \_|
  \__, |\___/ \__,_| |___/_| |_|\__,_|_|_| |_| |_|\___/ \__|  | .__/ \__,_|___/___(_)
   __/ |                                                      | |
  |___/                                                       |_|

                                                        +`
                                                     d.
                               `.                    d-
     .                         +d`                   m-
   -:/+                        dmo                   m:
   `s/o                       :mmm-                 `m/
    `s-                       ymmmy                 `m/
     -o                      :mmmmm/                `m+
      y                  .-/+dmmmmmmyyso/:-.`       `m+
      /:            ./oyddmmmmmmmmmmmmmmmhs/`      /omd+-
      -y.           `.-/+syhmmmmmmmmd+/-.`       ..`smm.
     `dmdy:so+:-`          `dmmhddmmm        .:ohdyyddy`
      smmh/dmmmmdy+:---:/+oomms:s:ymdo/:--/shdmmmmh..s:
      `:d` /mmmmmmmmmmmmmmmmmd.`. :dmmmmmmmmmmmmmmd  ``
        d.  dmmmmmmmmmmmmmmmmo    `dmmmmmmmmmmmmmmm
        s+  ommmmmmmmmmdhdmmm/     ymm+:+shdmmmmmmm`
        :y  +mmmmdys/-.``+mmm/    .dmm-   `.:+syhdd-
        `d` :o+:-.       -mmmd    .mmm:         `..`
         y/              /mmmm/. :ommm+
         /y              ommmmmo+hmmmmh
         `m`             dmmmmmmmmmmmmm-
          y:            -mmmmmmmmmmmmmmy
          +s            smmmmmmmmmmmmmmm-
          .d           .mmmmmmmmmmmmmmmmh
           h-          ommmmmmmmmmmmmmmmm+
           +o         `mmmmmmmmmmmmmmmmmmm.
           .d         ommmmmmmmmmmmmmmmmmmy
            h.       .mmmmmmmmmmmmmmmmmmmmm+
            ++       smmmmmmmmmmmmmmmmmmmmmm-
            .h      .mmmmmmmmmmmmmmmmmmmmmmmd`
             +      ymmmmmmmmmmmmmmmmmmmmmmmmy
                   `///::oyyy+//////oyyyo//+++.
                         -///-      :+++:
   */

  function createCookie(name,value,days) {
    var expires = null;
    var date = new Date();
    if (days) {
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = "; expires="+date.toGMTString();
    }
    else {
      expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

  var __DEBUG__ = true;

  var baseUrl = 'http://passtest-001-site1.gtempurl.com/';
  var restEndpoints = {
    'validate': 'validate'
  };



  function getRestEndpoint(endpointId) {
    if( !(endpointId in restEndpoints) ) {
      return 'notfound';
    }

    var endpoint = restEndpoints[endpointId];

    return baseUrl + endpoint;
  }

  function getResponseBody(res) {
    // console.log(res);
    return (res.body);
  }

  function getElement(queryString) {
    return document.querySelectorAll(queryString);
  }

  function getInputByName(inputName) {
    return document.querySelectorAll('[name="' + inputName + '"]');
  }

  var gandalfQuotes = [
    'All we have to decide is what to do with the time that is given us.',
    'I will not say: do not weep; for not all tears are an evil.',
    'Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement.',
    'He that breaks a thing to find out what it is has left the path of wisdom.',
    'It is not despair, for despair is only for those who see the end beyond all doubt. We do not.',
    '"You cannot pass," he said. The orcs stood still, and a dead silence fell.',
    'I am a servant of the Secret Fire, wielder of the flame of Anor. You cannot pass. ',
    // 'Fly you fools',
    'Courage will now be your best defence against the storm that is at hand-—that and such hope as I bring.'
  ];

  var env = 'TEST';
  var envKey = 'MyKey';
  var tcosAuthDomain = 'hrt://pain.com';
  // console.groupCollapsed('Initializing Google Analytics...');
  // console.log('%cEnvironment:', 'color: tomato', env);
  // console.log('%cUsing tracking ID for:', 'color: tomato', envKey);
  // console.log('%cAdditional domains:', 'color: tomato', tcosAuthDomain);
  // console.groupEnd();



  // var notification = getElement('.gandalf .not')[0];

  // notification.addEventListener('click', function(event) {
  //   var index = Math.round(Math.random() * gandalfQuotes.length);
  //   console.log('index:', index);
  //   this.setAttribute('title', gandalfQuotes[ index ]);
  // }, true);

  var ysnpApp = new Vue({
    // Component-specific:
    el: '#ysnpApp',
    created: function() {
    },
    mounted: function() {

    },

    // HTTP:
    http: {
      emulateJSON: true,
      headers: {
        'Accept': '*/*'
      }
    },

    data: {
      title: (function() {
        return gandalfQuotes[ Math.round(Math.random() * gandalfQuotes.length) ];
      })(),

      showSpeechBubble: false,
      gandalfSays: 'Hello Werld!',

      showFooterSpeechBubble: false,
      gandalfFooterText: '',

      introText:'Intro text here...',

      form: {
        city: '',
        department: '',
        technologies: '',

        firstName: '',
        lastName: '',

        secretCode: ''
      },

      hints: [

      ],

      secret: {
        isSuccessful: true,
        errorMsg: ''
      }
    },
    methods: {
      doSubmit: function() {
        var that = this;
        console.log('form:', this.form.secretCode);
        this.$http
          .post(
            getRestEndpoint('validate'),
            ({
              code: this.form.secretCode// + new Date().toLocaleString()
            }),
            {
              responseType: 'json',
              headers: {
                // 'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
          })
          .then(function(response) {

            // get body data
            // this.someData = response.body;
            response = getResponseBody(response);
            var hints = [];
            var hintExists = [];
            for(var hintId in response.hint) {
              hintExists = that.hints.filter(function(hint) {
                return hint.title.toLowerCase() === hintId.toLowerCase();
              });
              if(hintExists.length === 0) {
                hints.push({
                  title: hintId,
                  description: response.hint[hintId]
                });
              }
            }

            that.hints = that.hints.concat(hints);

            that.secret.isSuccessful = response.succes;

            console.log('secret:', that.secret.isSuccessful);


            if(!response.succes) {
              var sec = response.secret;
              for(var p in sec) {
                that.secret.errorMsg = sec[p];
                break;
              }
            }
            console.log('secret:', that.secret.errorMsg);
            console.log('aaaaa', that);

            console.log('response', response);
            // window.location = 'result.html?fn=' + this.firstName;

          },
          function(errorResponse) {
            if(__DEBUG__ === true) {
              // window.location = 'result.html?fn=' + this.firstName;
            }
          });
      },
      updateTitle: function() {
        var index = Math.round(Math.random() * gandalfQuotes.length);
        this.title = gandalfQuotes[index];
        this.gandalfSays = gandalfQuotes[index];
        this.showSpeechBubble = true;
        return this.title;
      },
      hideSpeechBubble: function() {
        this.showSpeechBubble = false;
      },
      hideFooterSpeechBubble: function() {
        this.showFooterSpeechBubble = false;
      },
      showNotification: function(text) {
        this.showFooterSpeechBubble = true;
        this.gandalfFooterText = text;
        var that = this;
        setTimeout(function() {
          that.hideNotification();
        }, 10000);
      },
      hideNotification: function() {
        this.showFooterSpeechBubble = false;
        this.gandalfFooterText = '';
      },
      validateName: function() {
        if(this.form.firstName.toLowerCase() === 'chuck' &&
            this.form.lastName.toLowerCase() === 'norris') {
          console.log('success!');
        var that = this;
          this.$http
            .get('https://api.chucknorris.io/jokes/random')
            .then(function(res) {
              console.log("ck:", res);
              res = JSON.parse(res.bodyText);
              that.showNotification(res.value);
            });
        }
      },
      updateTechnologies: function(ev) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        var haystack = ev.target.value || '';
        var technology = '';
        var hasFoundMatch = false;
        console.log('haystack:', haystack);

        var exciting = [
          {
            regex: /nodejs/,
            theme: 'nodejs'
          },
          {
            regex: /net/,
            theme: 'dotnet'
          },
          {
            regex: /java/,
            theme: 'java'
          }
        ];

        exciting.forEach(function(tech) {
          var isMatching = haystack.replace('.', '').match(tech.regex);
          // console.log('is matching:', isMatching);
          if(isMatching && hasFoundMatch) {
            hasFoundMatch = true;
            technology = tech.theme;
          }
        });

        // console.log(technology, ev);

        if(technology.length > 0) {
          link.id = 'easter';
          link.rel  = 'stylesheet';
          link.type = 'text/css';
          link.href = 'assets/css/themes/' + technology + '/style.css';
          link.media = 'all';
          head.appendChild(link);
        }
        else {
          var easter = getElement('#easter');
          if(easter.length) {
            easter = easter[0];
            easter.parentElement.removeChild(easter);
          }
        }
      },

    }
  });

  var ysnpAppResult = new Vue({
    el: '#ysnpAppResult',
    created: function() {
      this.firstName = window.location.search.split('=')[1] || 'Anonymous';
    },
    mounted: function() {

    },
    data: {
      firstName: 'Anonymous',
      email: ''
    },
    methods: {
      doSubmit: function() {

      }
    }
  });

  if(__DEBUG__ === true) {
    window.app = ysnpApp;
  }
})();
