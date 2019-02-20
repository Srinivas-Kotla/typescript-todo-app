import * as React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {getTodoList} from "../actions/appActions";


export interface ToDo{
  userId: number,
  id: number,
  title: string
  completed: boolean
}
interface ListViewProps {
    todoList: ToDo[],
    getTodoList() : void
}

const viewStyle:any = {
  display:"flex",
  flexDirection:"row",
};

const labelStyle:any = {
  marginRight: "10px"
};

const divStyle:any = {
  marginBottom:"20px"
};

class ListView extends React.Component<ListViewProps,{}>{

    public componentWillMount():void{
      this.props.getTodoList()
    }

    public render(){
      const todoItems = this.props.todoList.map((todo,index) => {
        return (<div style={divStyle} key={index} >
          <div style={viewStyle}>
            <Typography color="textSecondary" variant="overline" style={labelStyle}>User Id:</Typography>
            <Typography variant="overline">{todo.userId}</Typography>
          </div>
          <div style={viewStyle}>
            <Typography style={labelStyle} color="textSecondary" variant="overline">Id:</Typography>
            <Typography variant="overline">{todo.id}</Typography>
          </div>
          <div style={viewStyle}>
            <Typography style={labelStyle} color="textSecondary" variant="overline">Title:</Typography>
            <Typography variant="overline">{todo.title}</Typography>
          </div>
          <div style={viewStyle}>
            <Typography style={labelStyle} color="textSecondary" variant="overline">Complete:</Typography>
            <Typography variant="overline">{todo.completed?"Yes":"No"}</Typography>
          </div>
        </div>);
      });
      return(
          <Card>
            <CardContent>
              <div>
                {todoItems}
              </div>
            </CardContent>
          </Card>
      );
    }
}

const mapStateToProps = (state:any) => ({
      todoList: state.todoData.todoList
    }
);


export default connect(mapStateToProps,{getTodoList})(ListView);