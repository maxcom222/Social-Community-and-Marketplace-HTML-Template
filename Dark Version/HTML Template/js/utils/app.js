const app = {
  deepExtend: function (a, b) {
    for (const prop in b) {
      if (typeof b[prop] === 'object') {
        a[prop] = b[prop] instanceof Array ? [] : {};
        this.deepExtend(a[prop], b[prop]);
      } else {
        a[prop] = b[prop];
      }
    }
  },
  query: function (options) {
    const config = {
      method: 'GET',
      async: true,
      header: {
        type: 'Content-type',
        value: 'application/json'
      },
      data: ''
    };

    this.deepExtend(config, options);

    return new Promise( function (resolve, reject) {
      const xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (xhttp.readyState !== 4) return;

        if (xhttp.status === 200) {
          resolve(xhttp.responseText);
        } else {
          reject({
            status: xhttp.status,
            statusText: xhttp.statusText
          });
        }
      };
  
      xhttp.open(config.method, config.url, config.async);
      xhttp.setRequestHeader(config.header.type, config.header.value);
  
      if (config.method === 'GET') {
        xhttp.send();
      } else if (config.method === 'POST') {
        xhttp.send(config.data);
      }
    });
  },
  querySelector: function (selector, callback) {
    const el = document.querySelectorAll(selector);

    if (el.length) {
      callback(el);
    }
  },
  liquidify: function (el) {
    const image = el.querySelector('img'),
          imageSrc = image.getAttribute('src');
  
    image.style.display = 'none';
    el.style.background = `url("${imageSrc}") no-repeat center`;
    el.style.backgroundSize = 'cover';
  },
  liquidifyStatic: function (figure, image) {
    image.style.display = 'none';
    figure.style.background = `url("${image.getAttribute('src')}") no-repeat center`;
    figure.style.backgroundSize = 'cover';
  },
  dateDiff: function (date1, date2 = new Date()) {
    const timeDiff = Math.abs(date1.getTime() - date2.getTime()),
          secondsDiff = Math.ceil(timeDiff / (1000)),
          minutesDiff = Math.floor(timeDiff / (1000 * 60)),
          hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60)),
          daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
          weeksDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7)),
          monthsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7 * 4)),
          yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7 * 4 * 12));

    let unit;

    if (secondsDiff < 60) {
      unit = secondsDiff === 1 ? 'second' : 'seconds';

      return {
        unit: unit,
        value: secondsDiff
      }
    } else if (minutesDiff < 60) {
      unit = minutesDiff === 1 ? 'minute' : 'minutes';

      return {
        unit: unit,
        value: minutesDiff
      }
    } else if (hoursDiff < 24) {
      unit = hoursDiff === 1 ? 'hour' : 'hours';

      return {
        unit: unit,
        value: hoursDiff
      }
    } else if (daysDiff < 7) {
      unit = daysDiff === 1 ? 'day' : 'days';

      return {
        unit: unit,
        value: daysDiff
      }
    } else if (weeksDiff < 4) {
      unit = weeksDiff === 1 ? 'week' : 'weeks';

      return {
        unit: unit,
        value: weeksDiff
      }
    } else if (monthsDiff < 12) {
      unit = monthsDiff === 1 ? 'month' : 'months';

      return {
        unit: unit,
        value: monthsDiff
      }
    } else {
      unit = yearsDiff === 1 ? 'year' : 'years';

      return {
        unit: unit,
        value: yearsDiff
      }
    }
  },
  existsInDOM: function (selector) {
    return document.querySelectorAll(selector).length;
  },
  plugins: {
    createTab: function (options) {
      if (app.existsInDOM(options.triggers) && app.existsInDOM(options.elements)) {
        return new XM_Tab(options);
      }
    },
    createHexagon: function (options) {
      if (app.existsInDOM(options.container) || typeof options.containerElement !== 'undefined') {
        return new XM_Hexagon(options);
      }
    },
    createProgressBar: function (options) {
      if (app.existsInDOM(options.container)) {
        return new XM_ProgressBar(options);
      }
    },
    createDropdown: function (options) {
      if (((app.existsInDOM(options.container) || typeof options.containerElement !== 'undefined') && options.controlToggle) || ((app.existsInDOM(options.trigger) || typeof options.triggerElement !== 'undefined') && (app.existsInDOM(options.container) || typeof options.containerElement !== 'undefined'))) {
        return new XM_Dropdown(options);
      }
    },
    createTooltip: function (options) {
      if (app.existsInDOM(options.container)) {
        return new XM_Tooltip(options);
      }
    },
    createSlider: function (options) {
      if (app.existsInDOM(options.container)) {
        return tns(options);
      }
    },
    createPopup: function (options) {
      if (app.existsInDOM(options.container) && app.existsInDOM(options.trigger)) {
        return new XM_Popup(options);
      }
    },
    createAccordion: function (options) {
      if (app.existsInDOM(options.triggerSelector) && app.existsInDOM(options.contentSelector)) {
        return new XM_Accordion(options);
      }
    },
    createChart: function (ctx, options) {
      return new Chart(ctx, options);
    }
  }
};