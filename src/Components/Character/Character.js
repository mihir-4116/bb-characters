
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
    img: {
        height: 300,
        width: "100%",
        objectFit:'cover'
   }
});
export const Character = ({ character }) => {
    console.log(character);
    const classes = useStyles();
    return (
       <Card>
            <Tooltip title={
                <React.Fragment>
                    <Typography>Name : {character.name}</Typography>
                    <Typography>Real Name : {character.portrayed}</Typography>
                    <Typography>Nickname : {character.nickname}</Typography>
                    <Typography>Birthday : {character.birthday}</Typography>
                    <Typography>Status : {character.status}</Typography>
                    <Typography>Appearance : {
                        character.appearance + " "
                    }
                         
                    </Typography>
                     <Typography>Occuption : {
                        character.occupation + " "
                    }
                         
                    </Typography>
                </React.Fragment>
            } arrow placement="top-end">
                <img src={character.img} className={classes.img} alt=" "></img>
            </Tooltip>
    </Card>
    )
};
