import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Button, Grid, Typography  } from '@mui/material';
import TextField from '@mui/material/TextField';

//Gql
import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../../graphql/mutations';

//Defualt Css
import { inputLabelClasses } from "@mui/material/InputLabel";


function CommentForm({slug}) {

    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [pressed, setPressed]= useState(false);

    const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
        variables: { name, email, text, slug },
      });
   

    const sendHandler = () =>{
        if(name && email && text) {
            sendComment();
            setPressed(true);
        } else {
            toast.warn("تمام فیلدها را کامل کنید",{
                position: "top-center",
            })
        }
    }

    if(data && pressed){
        toast.success("کامنت ارسال شد و منتظر تایید می‌باشد", {
            position: "top-center"
        })
    }

    return (
       <Grid container sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",borderRadius: 4, py: 1, mt:5}}>
            <Grid item xs={12} m={2}>
                <Typography component="p" variant='h6' fontWeight={700} color="primary">فرم ارسال کامنت</Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField

                    label="نام کاربری" 
                    variant="outlined" 
                    sx={{width: "100%"}}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField     
                    label="ایمیل"
                    InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: "red",
                          right: "30px",
                          [`&.${inputLabelClasses.shrink}`]: {
                            // set the color of the label when shrinked (usually when the TextField is focused)
                            
                            transformOrigin: 'top right',
                            transform: 'translateX(18px) translateY(-10px)'
                            
                          }
                        }
                      }}
                    variant="outlined" 
                    sx={{width: "100%"}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField 
                    label="متن کامنت" 
                    variant="outlined" 
                    sx={{width: "100%"}}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    multiline
                    minRows={4}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                {
                    loading ? 
                    <Button variant='contained' disabled>درجال ارسال .....</Button>
                    : <Button variant='contained' onClick={sendHandler}>ارسال</Button>
                }
            </Grid>
            <ToastContainer />
       </Grid>
    );
}

export default CommentForm;