import PropTypes from 'prop-types'
import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons';


export default function SearchBox({onInputChange}){
  const onChange=(e)=>{
    const inputValue=e.target.value;
    onInputChange(inputValue);
  }
  return (
      <Input
          size="large"
          placeholder='search'
          prefix={<SearchOutlined style={{fontSize:16}}/>}
          onChange={onChange}
      />

  )
}

SearchBox.prototype={
  onInputChange: PropTypes.func.isRequired
}