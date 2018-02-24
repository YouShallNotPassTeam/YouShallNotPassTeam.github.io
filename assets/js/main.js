(function() {

  var __DEBUG__ = true;

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
    'Fly you fools',
    'Courage will now be your best defence against the storm that is at hand-—that and such hope as I bring.'
  ];


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

      city: '',
      department: '',
      technologies: '',

      firstName: '',
      lastName: '',

      secretCode: '',

      hints: [
        {
          title: 'Title1',
          description: 'Description1'
        },
        {
          title: 'Title2',
          description: 'Description2'
        },
        {
          title: 'Title3',
          description: 'Description3'
        },
        {
          title: 'Title4',
          description: 'Description4'
        }
      ]
    },
    methods: {
      doSubmit: function() {
        this.$http
          .post(
            'http://passtest-001-site1.gtempurl.com/validate', 
            ({
              code: 'asdasdads'// + new Date().toLocaleString()
            }), 
            {
              responseType: 'json',
              headers: {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
          })
          .then(function(response) {

            // get body data
            // this.someData = response.body;
            console.log(response);
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
        if(this.firstName.toLowerCase() === 'chuck' &&
            this.lastName.toLowerCase() === 'norris') {
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