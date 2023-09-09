const fs = require('fs')
const xlsx = require('node-xlsx')
const obj = xlsx.parse('./' + 'demo.xls')
const fn = (data) => {
  // 这里写需要的格式
  return data.map((v) => {
    return {
      key: v[1],
      dataIndex: v[1],
      title: v[4] ? `${v[2]}(${v[4]})` : v[2],
      valueType: 'text',
      className: 'leaf-node',
    }
  })
}
fs.writeFile('./result.json', JSON.stringify(fn(obj[0].data)), (err, _result) => {
  if (err)
    throw (err)
})
