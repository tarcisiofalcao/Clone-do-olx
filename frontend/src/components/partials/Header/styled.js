import styled from 'styled-components';

export const HeaderArea = styled.div`
    height:60px;
    border-bottom:1px solid #ccc;
    background-color:#fff;

    .container{
        height:100%;
        max-width:1000px;
        margin:0 auto;
        display:flex;
        align-items:center;

        a{
            text-decoration:none;
        }

        .logo{
            font-size:27px;
            font-weight:bold;
            flex:1;

            .logo1{color:#ff0000; margin-right:3px;}
            .logo2{color:#00ff00; margin-right:3px;}
            .logo3{color:#0000ff; margin-right:3px;}
        }

        nav{
            padding-top:10px;
            padding-bottom:10px;

            ul{
                list-style:none;
                display:flex;
                align-items:center;
                height:40px;
                
                li{
                    margin-left:40px;

                    .btn-logout{
                        border:none;
                        background-color:#fff;
                        color:#222;
                        font-size: 16px;
                        cursor:pointer;
                        outline:none;

                        &:hover{
                            color:#999;
                        }
                    }
                    a{
                        color:#222;
                        font-size: 16px;

                        &:hover{
                            color:#999;
                        }

                        &.button {
                            background-color:#ff8100;
                            border-radius:5px;
                            color:#fff;
                            padding:5px 10px;

                            &:hover{
                                background-color:#e57706;
                            }
                        }
                    }
                }
            }
        }
    }
`;
