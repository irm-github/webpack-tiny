(()=>{
  console.log('Hello World \r\n');

  switch (ENV) {
    case 'dev':
      console.log('开发环境');
      break;
    case 'stg':
      console.log('测试环境');
      break;
    case 'prd':
      console.log('生成环境');
      break;
    default:
      console.log('未知');
      break;
  }
})()