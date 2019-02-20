import * as React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { withStyles,createStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import {addToDo} from "../actions/appActions";
import {ToDo} from "./ListView";

const styles = (theme:any) => createStyles({
  card: {
    width: 400,
  },
  container: {
    display:"flex",
    flexDirection: "column",
  },
});

interface AddToDoProps {
  newToDo?: ToDo,
  todoList: ToDo[],
  classes: any
  addToDo(todo:ToDo):void
}

interface AddToDoState {
  title: string,
  isCompleted: boolean,
  userId: number,
}

class AddToDo extends React.Component<AddToDoProps,AddToDoState>{
  constructor(props:AddToDoProps){
    super(props);
    this.state = {
      title: "",
      isCompleted: true,
      userId: 0
    }
  }

  public handleUserIdInput = () => (event:any) => {
    this.setState({userId: event.target.value});
    console.log(this.state.userId);
  };

  public handleTitleInput = () => (event:any) => {
    this.setState({title: event.target.value});
    console.log(this.state.title);
  };

  public handleIsCompleteInput = () => (event:any) => {
    this.setState({isCompleted: event.target.checked});
    console.log(this.state.isCompleted);
  };

  public addNewItem = ():any => () => {
    const newItem:ToDo = {
      userId: this.state.userId,
      id: this.props.todoList.length +1,
      title: this.state.title,
      completed: this.state.isCompleted

    };
    this.props.addToDo(newItem)
  };

  public render(){
    const {classes} = this.props;
    return(
        <Card>
          <CardContent>
              <form noValidate autoComplete="off">
                <div className={classes.container}>
                <TextField
                    id="inputUserId"
                    className={classes.card}
                    label="User ID"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleUserIdInput()}
                    value = {this.state.userId}
                />
                <TextField
                    id="inputTitle"
                    className={classes.card}
                    label="Title"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleTitleInput()}
                    value = {this.state.title}
                />
                <FormControlLabel
                    control={
                      <Checkbox checked={this.state.isCompleted} onClick={this.handleIsCompleteInput()} color="primary" value="isCompleted"/>
                    }
                    label="Completed"
                />
                </div>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.addNewItem()}>+ADD</Button>
              </form>
          </CardContent>
        </Card>
    );
  }
}

const mapStateToProps = (state:any) => ({
      todoList: state.todoData.todoList
    }
);


const addToDoWithStyles = withStyles(styles)(AddToDo);
export default connect(mapStateToProps,{addToDo})(addToDoWithStyles);