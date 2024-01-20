import styled from "styled-components";

const SocialsStyle = styled.div`

.main__container{
    background-color: #000;
    // width: 4px;

    position: absolute;
    left: 0px;
    bottom: 40px;
}


   .container{
       width: fit-content;
       margin: auto;
   }

img{
       width: 40px;
       padding: 10px 5px;
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




`;
export default SocialsStyle;