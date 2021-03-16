//pre: state属性的子属性是只读地read only,不能直接对它的属性赋值。
//Get: 假如子属性是一个对象{},设置子属性的字段的值，dev-tool看state也不会变。怎么做到的，有点秀，不懂。。。
//好像不太对，有时候好像变了？？? 周一问问。。。

//结论：state嵌套对象的值变没变不重要，记住,只有调用setState()方法才会触发render()方法的重新调用,apply state新值。
import React from 'react';
import { Button } from 'antd';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: -1,
      person: {
        name: 'upup??',
        id: 'xxx',
      },
    };
  }

  render() {
    return (
      <>
        <Button
          onClick={() => {
            console.log('xx');
            this.state.person.id = Math.random();
            console.log(this.state.person.id); //ok--能读到，这里没有不符合预期的
          }}
        >
          OK
        </Button>

        <Button onClick={() => this.setState({ tag: Math.random() })}>
          SetState
        </Button>
      </>
    );
  }
}
