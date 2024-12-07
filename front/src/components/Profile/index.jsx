import { ProfileContainer, UserInfo, PostSection, FormGroup } from "./styles";
import { useEffect, useState } from "react";
import { atualizarUsuarioParcial, getUsuario } from "../../service/User/index.js";
import { getJwtToken } from "../../service/Shared/index.js";

export default function Profile() {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
    const [posts, setPosts] = useState([]); // Armazenar os posts do usuário

    // Carregar os dados do usuário e suas postagens
    const load = async () => {
        try {
            const { data: { nome, bio, seguidores, seguindo, publicacoes } } = await getUsuario(getJwtToken());
            if (nome) setName(nome);
            if (bio) setBio(bio);
            if (seguidores) setFollowers(seguidores);
            if (seguindo) setFollowing(seguindo);
            if (publicacoes) setPosts(publicacoes);
        } catch (error) {
            console.error("Erro ao carregar os dados:", error);
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            await atualizarUsuarioParcial({ nome: name, bio });
            alert("Perfil atualizado com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar o perfil:", error);
            alert("Erro ao salvar as alterações.");
        }
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <ProfileContainer>
            {/* Informações do usuário */}
            <UserInfo>
                <div className="profile-picture">
                    <img src="https://via.placeholder.com/150" alt="Foto de Perfil" />
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <p>{bio}</p>
                    <div className="stats">
                        <span><strong>{posts.length}</strong> publicações</span>
                        <span><strong>{followers}</strong> seguidores</span>
                        <span><strong>{following}</strong> seguindo</span>
                    </div>
                    <button className="edit-btn">Editar Perfil</button>
                </div>
            </UserInfo>

            {/* Seção de postagens */}
            <PostSection>
                <h2>Publicações</h2>
                <div className="post-grid">
                    {posts.map((post, index) => (
                        <div key={index} className="post">
                            <img src={post.image} alt={post.title} />
                        </div>
                    ))}
                </div>
            </PostSection>

            {/* Formulário de edição */}
            <FormGroup onSubmit={submit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome"
                    />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Fale um pouco sobre você"
                    />
                </div>
                <button type="submit">Salvar</button>
            </FormGroup>
        </ProfileContainer>
    );
}
