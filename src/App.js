import * as React from "react";
import "./App.css";
import Accordion_faq from "./components/Accordion-faq.tsx";
import Facebook_icon from "./assets/footer/5305154_fb_facebook_facebook logo_icon.png";
import Twitter_icon from "./assets/footer/104461_twitter_icon.png";
import Insta_icon from "./assets/footer/5279112_camera_instagram_social media_instagram logo_icon.png";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function App() {
  return (
    <div>
      <div id="faq-img">FAQ</div>
      <section id="faq-heading">
        <h3>FAQ</h3>
        <h1>
          Frequent Asked <span>Questions</span>{" "}
        </h1>
        <h5>Got questions? Check out our FAQs for quick answers.</h5>
      </section>
      <Accordion_faq />

      <footer id="faq-footer">
        <div id="first">
          <b>BonVoyage</b>
          <p>
            We always make our customers happy by providing as many choices as
            possible
          </p>
          <div id="social-icon">
            <img src={Facebook_icon} width={20}></img>
            <img src={Twitter_icon} width={20}></img>
            <img src={Insta_icon} width={20}></img>
          </div>
        </div>
        <div id="second">
          <div>
            <b>About</b>
            <p>About Us</p>
            <p>Features</p>
            <p>News</p>
            <p>Menu</p>
          </div>
          <div>
            <b>Company</b>
            <p>Why BonVoyage</p>
            <p>Partner With Us</p>
            <p>FAQ</p>
            <p>Blog</p>
          </div>
          <div>
            <b>Support</b>
            <p>Account</p>
            <p>Support Center</p>
            <p>feedback</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div id="third">
          <div style={{marginBottom:'30px'}}>
          <b >Subscribe on our destination review newsletters</b>
            
            </div>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: 'space-evenly',
              border: "1px solid white",
              backgroundColor:"white",
              padding:"15px",
              borderRadius:"10px",
              width:"70%"
            }}
          >
            <EmailOutlinedIcon sx={{ color: "orange",mr:"10px"}} />
            <TextField
              sx={{
                mr: "1",
                "& .MuiInputBase-root":{
                  margin:"0"
                },
                "& .MuiInputBase-root:hover":{
                  border:"none"
                },
                "& .MuiFormLabel-root":{
                  position:"relative"
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "none", 
                },
                "& .MuiInput-underline:before:hover":{
                  borderBottom: "none", 
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "none", 
                },
              }}
              id="input-with-sx"
              size="smaller"
              variant="standard"
              placeholder="Your Email"
            />
          </Box>
        </div>
      </footer>
    </div>
  );
}
