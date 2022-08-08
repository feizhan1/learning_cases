/**
 * @description 创建着色器元素
 * @param {Object} gl 获取webgl绘图环境
 * @param {any} shaderType 着色器类型
 * @param {String} selector 元素选择器
 */ 
function createShaderFromScript(gl, shaderType, selector) {
  // 获取着色器源码
  var shaderSource = document.querySelector(selector).innerHTML;
  // 创建着色器对象
  var shader = gl.createShader(shaderType);
  // 讲源码分配给着色器对象
  gl.shaderSource(shader, shaderSource);
  // 编译着色器程序
  gl.compileShader(shader);
  let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
  console.error(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

/**
 * @description 创建着色器程序
 * @param {Array} shaderTypes 着色器类型
*/
function createProgram(gl, vertexShader, fragmentShader ) {
  try {
    var program = gl.createProgram();
    vertexShader && gl.attachShader(program, vertexShader);
    fragmentShader && gl.attachShader(program, fragmentShader);
    // 链接着色器程序
    gl.linkProgram(program);
    let result = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (result) {
      console.log('着色器程序创建成功');
      return program;
    }
    let errorLog = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw errorLog;
  } catch (error) {
    console.error(error);
  }
}

function randomColor() {
  var random = Math.random;
  return {
    r: random() * 255,
    g: random() * 255,
    b: random() * 255,
    a: random() * 1
  };
}

function loadTexture(gl, src, attribute, callback) {
  let img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    gl.activeTexture(gl.TEXTURE0);
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.uniform1i(attribute, 0);
    callback && callback();
  };
  img.src = src;
}

function resizeCanvas(canvas, width, height) {
  if (canvas.width !== width) {
    canvas.width = width ? width : window.innerWidth;

  }
  if (canvas.height !== height) {
    canvas.height = height ? height : window.innerHeight;
  }
}

function createSimpleProgramFromScript(gl, vertexScriptId, fragmentScriptId) {
  let vertexShader = createShaderFromScript(
    gl,
    gl.VERTEX_SHADER,
    vertexScriptId
  );
  let fragmentShader = createShaderFromScript(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentScriptId
  );
  let program = createSimpleProgram(gl, vertexShader, fragmentShader);
  return program;
}

function createShaderFromScript(gl, type, scriptId) {
  let sourceScript = $$('#' + scriptId);
  if (!sourceScript) {
    return null;
  }
  return createShader(gl, type, sourceScript.innerHTML);
}

function $$(str) {
  if (!str) return null;
  if (str.startsWith('#')) {
    return document.querySelector(str);
  }
  let result = document.querySelectorAll(str);
  if (result.length == 1) {
    return result[0];
  }
  return result;
}

function getContext(canvas) {
  return canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
}

function createShader(gl, type, source) {
  let shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  //检测是否编译正常。
  let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
  console.error(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function createSimpleProgram(gl, vertexShader, fragmentShader) {
  if (!vertexShader || !fragmentShader) {
    console.warn('着色器不能为空');
    return;
  }
  let program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  let success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
  console.error(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

function requestAnimationFrame(render) {
  let timer = null
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(() => {
      render()
    }, 50);
  }
}

function createColorForVertex(vertex, c) {
  let vertexNums = vertex.positions;
  let colors = [];
  let color = c || {
    r: 255,
    g: 0,
    b: 0,
    a: 255
  };

  for (let i = 0; i < vertexNums.length; i++) {
    color = c || randomColor();
    colors.push(color.r, color.g, color.b, 255);
  }

  vertex.colors = new Uint8Array(colors);
  return vertex;
}


