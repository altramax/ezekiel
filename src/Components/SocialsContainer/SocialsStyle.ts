import styled from "styled-components";

const SocialsStyle = styled.div`

.main__container{
    background-color: #000;
    position: absolute;
    left: 0px;
    bottom: 40px;
}


   .container{
       width: fit-content;
       margin: auto;
   }

img{
       width: 35px;
       padding: 7px;
   }

   .img1{
   display: block;
   }
   
   .img2{
    display: none;
   }


.linkedin:hover{
    .img1{
        display: none;
    }
    .img2{
        display: block;
    }
}

.twitter:hover{
    .img1{
        display: none;
    }
    .img2{
        display: block;
    }
}

.github:hover{
    .img1{
        display: none;
    }
    .img2{
        display: block;
    }
}

.instagram:hover{
    .img1{
        display: none;
    }
    .img2{
        display: block;
    }
}

.email:hover{
    .img1{
        display: none;
    }
    .img2{
        display: block;
    }
}




`;
export default SocialsStyle;