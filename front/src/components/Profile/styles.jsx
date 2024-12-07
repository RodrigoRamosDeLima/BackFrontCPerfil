import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
    background-color: #121212;
    min-height: 100vh;
    margin-left:20%
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    margin-bottom: 30px;
    border-bottom: 1px solid #2c2c2c;
    padding-bottom: 20px;

    .profile-picture {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #b083f1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        margin-left: 20px;

        h1 {
            font-size: 1.8rem;
            color: #a83eff;
        }

        p {
            color: #d9d9d9;
            margin: 5px 0 15px 0;
        }

        .stats {
            display: flex;
            gap: 20px;

            span {
                font-size: 1rem;
                color: #fff;

                strong {
                    color: #b083f1;
                }
            }
        }

        .edit-btn {
            margin-top: 15px;
            padding: 8px 16px;
            border: none;
            border-radius: 5px;
            background-color: #b083f1;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: #a071e1;
            }
        }
    }
`;

export const PostSection = styled.div`
    width: 80%;
    margin-top: 30px;

    h2 {
        color: #b083f1;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .post-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 10px;

        .post {
            width: 100%;
            padding-top: 100%; /* Quadrado */
            position: relative;
            background-color: #2c2c2c;

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;

export const FormGroup = styled.form`
    margin-top: 30px;
    width: 80%;

    label {
        font-size: 1rem;
        color: #d9d9d9;
        display: block;
        margin-bottom: 5px;
    }

    input,
    textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        background-color: #383838;
        border: none;
        border-radius: 8px;
        color: white;

        &:focus {
            outline: none;
            background-color: #4e4e4e;
        }
    }

    button {
        padding: 10px 20px;
        background-color: #b083f1;
        border: none;
        border-radius: 8px;
        color: white;
        cursor: pointer;
        font-family: "Oswald", sans-serif;

        &:hover {
            background-color: #a071e1;
        }
    }
`;
