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


  var notification = getElement('.gandalf .not')[0];

  notification.addEventListener('click', function(event) {
    var index = Math.round(Math.random() * gandalfQuotes.length);
    console.log('index:', index);
    this.setAttribute('title', gandalfQuotes[ index ]);
  }, true);

  var ysnpApp = new Vue({
    el: '#ysnpApp',
    data: {
      title: (function() {
        return gandalfQuotes[ Math.round(Math.random() * gandalfQuotes.length) ];
      })(),
      message: 'Hello Vue!',
      introText:'Intro text here...'
    },
    methods: {
      updateTitle: function() {
        var index = Math.round(Math.random() * gandalfQuotes.length);
        this.title = gandalfQuotes[index];
        return this.title;
      },
      updateTechnologies: function(ev) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        var haystack = ev.target.value || '';
        var technology = '';
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
          if(isMatching) {
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
      }
    }
  });

  if(__DEBUG__ === true) {
    window.app = ysnpApp;
  }
})();