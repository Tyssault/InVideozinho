## Objetivo
Criar um aplicativo local chamado InVideozinho com interface web (React + TypeScript + TailwindCSS) que funcione como uma central de criação de vídeos automáticos por IA. O aplicativo deve incluir as seguintes páginas: Home, Criar, Biblioteca, Modelo IA e Configurações. O aplicativo deve rodar localmente e integrar as seguintes ferramentas:
ComfyUI para gerar imagens e vídeos com workflows personalizados
Coqui TTS e Mozilla TTS para narrar textos com vozes humanas
Whisper para transcrever e traduzir áudios automaticamente
Wav2Lip para sincronizar boca e narração em personagens
FFMPEG para renderizar vídeos finalizados
N8N para automatizar fluxos como: roteiro → imagem + voz → vídeo
## Funcionalidades Principais
Transformar texto em vídeo com cenas narradas, imagens geradas e personagens
Criar imagens com estilo visual (anime, realista, Pixar etc.)
Criar áudios com voz IA personalizada
Gerenciar personagens, vozes, projetos e mídia na biblioteca local
Oferecer modos simples e avançados para diferentes níveis de usuário
## Estrutura do Aplicativo
### 1. Home (Painel de Boas-Vindas)
Input para “O que deseja criar hoje?” (texto livre)
Sugestões rápidas (ex: “Vídeo curto para TikTok”, “História infantil animada”)
Acesso direto aos modos: Criar Vídeo, Criar Imagem, Criar Áudio
Lista de projetos recentes
Módulo de personagens favoritos / avatares recorrentes
### 2. Criar Vídeo (Storyboard Editor)
Editor em blocos (cada parágrafo → 1 cena)
Para cada cena:
Texto narrado (com edição e entonação)
Imagem/vídeo de fundo (upload, gerar por IA ou escolher da biblioteca)
Personagem/avatar (opcional, com lip sync)
Música e efeitos sonoros (sincronização automática)
Duração e pausa entre frases (ajuste fino)
Barra lateral com lista das cenas (reordenar por drag & drop)
Pré-visualização rápida (render em baixa)
### 3. Criar Imagem (Image Creator)
Input de prompt
Seleção de estilo visual com thumbnails
Proporção (via dropdown com contexto: ex. "YouTube 16:9")
Upload de imagem de referência (inpainting, outpainting, faceswap etc.)
Integração com ComfyUI local
Resultado com botão "Usar em cena" ou "Salvar em biblioteca"
### 4. Criar Áudio (TTS Studio)
Campo para digitar texto a ser narrado
Escolha da voz (Coqui TTS, Mozilla TTS, etc.)
Ajustes de velocidade, tom, pausa, ênfase
Upload de voz do usuário (WAV/MP3)
Botão "Aplicar a personagem X" ou "Usar neste projeto"
Preview rápido e salvar
### 5. Biblioteca
Pastas organizadas:
Imagens geradas
Vídeos usados/criados
Áudios e vozes
Personagens
Templates
Filtros por data, tipo, nome
Tags e favoritos
Reutilização rápida: “Usar em novo projeto”
### 6. Personagens
Criar novo personagem:
Nome e avatar
Voz associada (modelo TTS ou clonada)
Características visuais (imagem base, estilo)
Visualização da ficha
Reutilização automática nos vídeos
### 7. Modelo IA (Avançado)
Criação de Personagens Realistas:
Objetivo: Permitir a criação de personagens realistas, especialmente modelos femininas para uso como influencers digitais e blogueiras em redes sociais. O processo deve ser intuitivo e permitir a customização detalhada de características físicas e de personalidade. É inspirado no site https://dreamgf.ai/ai-girls-builder, vamos detalhar mais o processo de criação de personagens realistas, incluindo a utilização de imagens de referência e a integração com o ComfyUI para ajustes específicos.
Componentes:
Personagens Personalizados:
Criação Baseada em Imagens de Referência: Permitir o upload de imagens de referência para guiar a geração de características específicas, como estilo de rosto, corpo, cabelo, etc.
Ajustes de Características Físicas: Utilizar controles deslizantes ou seleções para ajustar características como tamanho dos seios, forma do corpo, estilo do cabelo, cor dos olhos, etc.
LoRAs e Modelos Personalizados: Permitir a seleção e ajuste de LoRAs e modelos para personalização avançada.
Voz Exclusiva:
Clonagem de Voz: Permitir o upload de amostras de voz para clonagem, ou ajuste de vozes pré-existentes por pitch, velocidade e sotaque.
Seleção de Voz: Oferecer uma biblioteca de vozes pré-configuradas para escolha rápida.
Visual Estilizado ou Realista:
Estilo de Imagem: Opções para escolher entre estilos realistas, NSFW, 3D, etc.
Ajustes de Cenário e Iluminação: Permitir a escolha de cenários e ajustes de iluminação para as imagens geradas.
Controle Total:
Prompt Detalhado: Campo para inserção de prompts detalhados que guiarão a geração da imagem.
Seed e Resolução: Controles para definir seed e resolução das imagens geradas.
Modelo e Composição de Cena: Opções para escolher modelos de IA e composição de cena.
Cena + Fala + Movimento Labial (opcional):
Animação com Wav2Lip: Integração com Wav2Lip para sincronização labial em vídeos gerados.
Funcionalidades Específicas:
Seção “+18” Separada: Área específica para criação de conteúdo adulto sem censura, com opções de personalização avançadas.
Upload de Material de Referência: Permitir o upload de imagens e áudios pessoais para uso como referência na criação de personagens.
Sistema de “Modelos IA”: Sistema para criar e gerenciar modelos IA com imagem e voz fixas, facilitando a reutilização em diferentes projetos.
Suporte a Múltiplos Idiomas e Dublagem: Opções para selecionar idiomas e realizar dublagem automática de conteúdo gerado.
Exportação em MP4 ou como Avatar Animado: Opções para exportar os personagens criados em formatos adequados para streaming ou uso em vídeos.
### 8. Configurações
Pasta padrão para mídia
Modelos TTS instalados
Atalhos de exportação
Idioma, modo claro/escuro
Importar/exportar backups
## Funcionalidades Avançadas
Integração com N8N para fluxos automatizados (ex.: script → gerar vídeo → exportar com nome personalizado)
Lip sync com Wav2Lip ou alternativos (local)
Transições automáticas e animadas
Templates prontos com texto orientativo (ex.: pitch de vendas, receita, videoaula)
Criação de Thumbnails diretamente de cenas
Geração de versão para Shorts/Stories a partir do vídeo principal
Conversão de post ou blog em vídeo
Suporte a múltiplos idiomas + dublagem automática
## UX/UI: Design e Navegação
Visual inspirado em Fliki, Pixverse e InVideo
Barra lateral fixa com ícones e nomes (Home, Criar, Biblioteca, IA, etc.)
Tipografia moderna (Sans-Serif clara)
Ícones consistentes (Lucide ou similares)
Design 100% responsivo (foco desktop inicial)
Cards grandes, textos bem definidos, tooltips
## Etapas de Implementação
Estruturação da interface com rotas principais
Implementar o Criar Imagem com integração ComfyUI
Criar o Criar Áudio com TTS local
Criar Editor de Storyboard para vídeo
Implementar Biblioteca e Personagens
Conectar os fluxos N8N + exportadores
Adicionar funcionalidades de avatar animado
Finalizar interface e fluxo de onboarding
## Integração Técnica Completa
### Softwares envolvidos:
ComfyUI (Geração de imagem/vídeo via IA)
N8N (Orquestrador de automações e disparos de workflows)
Coqui TTS (Narração por IA com vozes customizadas)
Whisper (OpenAI) (Transcrição de áudio e tradução de voz)
FFMPEG (Renderização e exportação final de vídeos)
Wav2Lip (Lip sync realista de rostos em imagens/vídeos)
Stable Diffusion + Modelos (Checkpoints, LoRAs, VAE, etc.)
### Fluxo técnico automatizado:
Usuário digita roteiro/texto no InVideozinho e escolhe estilo visual (ex: Anime, Realista, Pixar).
O N8N recebe o evento do frontend e inicia um workflow automatizado:
Detecta o estilo escolhido
Seleciona o modelo adequado (Checkpoint + LoRA) via ComfyUI API
Executa o workflow JSON correto (ex: anime_workflow.json, pixar_recipe_workflow.json)
O ComfyUI gera as imagens ou frames de vídeo conforme o texto e o estilo, salvando na pasta local definida.
O Coqui TTS gera a narração do roteiro com a voz pré-definida (ou customizada por personagem).
Caso o usuário forneça áudio, o Whisper transcreve e gera legendas sincronizadas (e pode traduzir).
O Wav2Lip sincroniza a voz em imagens de rosto animadas (caso o personagem precise "falar" com a voz IA).
O FFMPEG junta tudo:
Imagem/vídeo + áudio + narração + trilha + transições animadas
Exporta nas resoluções definidas (720p, 1080p, ou 4K)
Cria versão vertical (9:16) se necessário para Shorts/Reels
O N8N devolve o resultado ao InVideozinho, onde o vídeo final é exibido, com preview e opção de download.
### Estrutura de pastas sugerida
/InVideozinho
├── /frontend → Código do InVideozinho (React + Tailwind)
├── /comfyui → Pasta clonada do ComfyUI com extensões instaladas
│ ├── /workflows → JSONs de fluxo de geração
│ ├── /checkpoints → Modelos SD/Flux baixados
│ ├── /loras → LoRAs temáticos (anime, nsfw, receitas...)
│ ├── /vae → VAEs dedicados
│ ├── /upscalers → ESRGANs para upscale
├── /n8n → Instância local de automações
├── /tts → Pasta do Coqui TTS + vozes
├── /whisper → Ferramenta de transcrição automática
├── /wav2lip → Lip sync para rostos (pré-processado ou automático)
├── /renders → Resultados finais exportados (vídeos e thumbs)
### Etapa Extra Paralela: Conexão dinâmica com ComfyUI
Objetivo: Criar um sistema de leitura de biblioteca local do ComfyUI que:
Permita que o InVideozinho escaneie os arquivos nas pastas do ComfyUI
Identifique e catalogue workflows, checkpoints, LoRAs, etc.
Gere um mapeamento.json para o N8N consultar com base no estilo escolhido
Adicione um botão "Atualizar Biblioteca do ComfyUI" dentro do InVideozinho
### Integração final:
O N8N consulta o mapeamento.json
Executa o fluxo de imagem/vídeo baseado nas escolhas do usuário
Retorna o resultado ao InVideozinho
Assim, o app permanece leve, escalável e modular, permitindo que você adicione modelos e estilos conforme a necessidade.
## Código Inicial
### Estrutura do Projeto
/src
├── /components
│ ├── Sidebar.tsx
│ ├── ImageCreator.tsx
│ ├── AudioCreator.tsx
│ ├── StoryboardEditor.tsx
│ ├── Biblioteca.tsx
│ ├── Personagens.tsx
│ ├── ModeloIA.tsx
│ ├── Configuracoes.tsx
│ ├── N8NPanel.tsx
│ ├── LipSyncPanel.tsx
│ ├── TransicaoSelector.tsx
│ ├── TemplateSelector.tsx
│ ├── ThumbnailGenerator.tsx
│ ├── ShortsGenerator.tsx
│ ├── BlogToVideo.tsx
│ ├── TraducaoDublagem.tsx
│ └── RenderFinal.tsx
├── /pages
│ ├── Home.tsx
│ ├── Criar.tsx
│ ├── Biblioteca.tsx
│ ├── ModeloIA.tsx
│ └── Configuracoes.tsx
├── App.tsx
└── main.tsx
### Código dos Componentes
#### Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';
import { Home, Wand2, BookOpenText, Settings, Brain } from 'lucide-react';

const navItems = [
{ label: 'Home', path: '/', icon: <Home size={20} /> },
{ label: 'Criar', path: '/criar', icon: <Wand2 size={20} /> },
{ label: 'Biblioteca', path: '/biblioteca', icon: <BookOpenText size={20} /> },
{ label: 'Modelo IA', path: '/modelo-ia', icon: <Brain size={20} /> },
{ label: 'Configurações', path: '/configuracoes', icon: <Settings size={20} /> },
];

export default function Sidebar() {
const location = useLocation();

return (
<aside className="w-60 bg-zinc-900 text-white p-4 space-y-4">
<h1 className="text-xl font-bold">InVideozinho</h1>
<nav className="space-y-2">
{navItems.map((item) => (
<Link
key={item.path}
to={item.path}
className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-zinc-800 transition ${
location.pathname === item.path ? 'bg-zinc-800' : ''
}`}
>
{item.icon}
<span>{item.label}</span>
</Link>
))}
</nav>
</aside>
);
}
#### ImageCreator.tsx
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const estilos = [
{ id: 'anime', label: 'Anime', image: '/style-thumbs/anime.png' },
{ id: 'realista', label: 'Realista', image: '/style-thumbs/realistic.png' },
{ id: 'pixar', label: 'Pixar 3D', image: '/style-thumbs/pixar3d.png' },
{ id: 'aquarela', label: 'Aquarela', image: '/style-thumbs/watercolor.png' },
];

const proporcoes = ['16:9', '9:16', '4:3', '1:1'];

export default function ImageCreator() {
const [prompt, setPrompt] = useState('');
const [estilo, setEstilo] = useState('anime');
const [proporcao, setProporcao] = useState('16:9');
const [imagem, setImagem] = useState<string | null>(null);

const gerarImagem = () => {
setImagem('https://via.placeholder.com/512x512.png?text=Imagem+Gerada');
};

return (
<div className="space-y-4">
<Card>
<CardContent className="space-y-4">
<div>
<Label>Prompt</Label>
<Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
</div>
<div>
<Label>Estilo</Label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
{estilos.map((e) => (
<button key={e.id} onClick={() => setEstilo(e.id)} className={`border p-2 rounded ${estilo === e.id ? 'bg-primary text-white' : ''}`}>
<img src={e.image} alt={e.label} className="w-16 h-16 object-cover mx-auto" />
<div className="text-center text-sm">{e.label}</div>
</button>
))}
</div>
</div>
<div>
<Label>Proporção</Label>
<select value={proporcao} onChange={(e) => setProporcao(e.target.value)} className="border p-2 rounded w-full">
{proporcoes.map((p) => <option key={p} value={p}>{p}</option>)}
</select>
</div>
<Button onClick={gerarImagem}>Gerar Imagem</Button>
</CardContent>
</Card>
{imagem && (
<Card>
<CardContent className="flex justify-center">
<img src={imagem} alt="Imagem Gerada" className="rounded shadow" />
</CardContent>
</Card>
)}
</div>
);
}
#### AudioCreator.tsx
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const vozes = ['Narrador Masculino', 'Narradora Feminina', 'Voz Infantil', 'Voz Robótica'];
const sotaques = ['Padrão BR', 'Nordeste', 'Sul', 'Sudeste', 'Interior'];

export default function AudioCreator() {
const [texto, setTexto] = useState('');
const [voz, setVoz] = useState(vozes[0]);
const [sotaque, setSotaque] = useState(sotaques[0]);
const [velocidade, setVelocidade] = useState(1);
const [previewUrl, setPreviewUrl] = useState<string | null>(null);

const gerarAudio = () => {
// Simulação de TTS local
setPreviewUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
};

return (
<div className="space-y-4">
<Card>
<CardContent className="space-y-4">
<div>
<Label>Texto para Narração</Label>
<Textarea value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Digite o texto a ser narrado..." />
</div>
<div>
<Label>Escolha a Voz</Label>
<select value={voz} onChange={(e) => setVoz(e.target.value)} className="border rounded p-2 w-full">
{vozes.map((v) => <option key={v}>{v}</option>)}
</select>
</div>
<div>
<Label>Sotaque</Label>
<select value={sotaque} onChange={(e) => setSotaque(e.target.value)} className="border rounded p-2 w-full">
{sotaques.map((s) => <option key={s}>{s}</option>)}
</select>
</div>
<div>
<Label>Velocidade</Label>
<Input type="range" min="0.5" max="2" step="0.1" value={velocidade} onChange={(e) => setVelocidade(parseFloat(e.target.value))} />
<div className="text-sm">{velocidade.toFixed(1)}x</div>
</div>
<Button onClick={gerarAudio}>Gerar Áudio</Button>
</CardContent>
</Card>
{previewUrl && (
<Card>
<CardContent className="p-4">
<audio controls src={previewUrl} className="w-full" />
</CardContent>
</Card>
)}
</div>
);
}
#### StoryboardEditor.tsx
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, Copy } from 'lucide-react';

interface Cena {
id: number;
texto: string;
imagem: string;
audio: string;
}

export default function StoryboardEditor() {
const [cenas, setCenas] = useState<Cena[]>([
{ id: 1, texto: '', imagem: '', audio: '' }
]);

const adicionarCena = () => {
const novaCena = { id: Date.now(), texto: '', imagem: '', audio: '' };
setCenas([...cenas, novaCena]);
};

const removerCena = (id: number) => {
setCenas(cenas.filter((c) => c.id !== id));
};

const duplicarCena = (id: number) => {
const cenaOriginal = cenas.find((c) => c.id === id);
if (cenaOriginal) {
const novaCena = { ...cenaOriginal, id: Date.now() };
setCenas([...cenas, novaCena]);
}
};

const atualizarCena = (id: number, campo: keyof Cena, valor: string) => {
setCenas(
cenas.map((c) =>
c.id === id ? { ...c, [campo]: valor } : c
)
);
};

return (
<div className="space-y-6">
{cenas.map((cena) => (
<Card key={cena.id}>
<CardContent className="space-y-4">
<Textarea
value={cena.texto}
onChange={(e) => atualizarCena(cena.id, 'texto', e.target.value)}
placeholder="Texto da cena ou narração..."
/>
<Input
type="text"
placeholder="URL da imagem de fundo"
value={cena.imagem}
onChange={(e) => atualizarCena(cena.id, 'imagem', e.target.value)}
/>
<Input
type="text"
placeholder="URL do áudio"
value={cena.audio}
onChange={(e) => atualizarCena(cena.id, 'audio', e.target.value)}
/>
<div className="flex gap-2">
<Button variant="outline" onClick={() => duplicarCena(cena.id)}><Copy className="w-4 h-4 mr-1" /> Duplicar</Button>
<Button variant="destructive" onClick={() => removerCena(cena.id)}><Trash2 className="w-4 h-4 mr-1" /> Remover</Button>
</div>
</CardContent>
</Card>
))}
<Button onClick={adicionarCena} className="w-full"><Plus className="w-4 h-4 mr-1" /> Adicionar Cena</Button>
</div>
);
}
#### Biblioteca.tsx
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Eye, Repeat } from 'lucide-react';

const arquivosMock = {
imagens: [
{ id: 1, nome: 'Imagem 01', url: 'https://via.placeholder.com/300x200' },
{ id: 2, nome: 'Imagem 02', url: 'https://via.placeholder.com/300x200' },
],
videos: [
{ id: 1, nome: 'Vídeo 01', url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
],
audios: [
{ id: 1, nome: 'Áudio 01', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
],
};

export default function Biblioteca() {
const [tab, setTab] = useState('imagens');
const tipos = Object.keys(arquivosMock);

return (
<Tabs value={tab} onValueChange={setTab} className="space-y-4">
<TabsList className="flex gap-2">
{tipos.map((tipo) => (
<TabsTrigger key={tipo} value={tipo}>{tipo.toUpperCase()}</TabsTrigger>
))}
</TabsList>
{tipos.map((tipo) => (
<TabsContent key={tipo} value={tipo} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
{arquivosMock[tipo].map((item) => (
<Card key={item.id}>
<CardContent className="space-y-2 p-4">
<div className="text-sm font-medium">{item.nome}</div>
{tipo === 'imagens' && <img src={item.url} alt={item.nome} className="rounded" />}
{tipo === 'videos' && <video controls src={item.url} className="rounded w-full" />}
{tipo === 'audios' && <audio controls src={item.url} className="w-full" />}
<div className="flex gap-2 mt-2">
<Button size="sm" variant="outline"><Eye className="w-4 h-4 mr-1" />Visualizar</Button>
<Button size="sm" variant="outline"><Repeat className="w-4 h-4 mr-1" />Reutilizar</Button>
<Button size="sm" variant="destructive"><Trash2 className="w-4 h-4 mr-1" />Excluir</Button>
</div>
</CardContent>
</Card>
))}
</TabsContent>
))}
</Tabs>
);
}
#### Personagens.tsx
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Trash2 } from 'lucide-react';

interface Personagem {
id: number;
nome: string;
imagem: string;
voz: string;
}

const vozesDisponiveis = ['Narrador Masculino', 'Narradora Feminina', 'Infantil', 'Neutra'];

export default function Personagens() {
const [personagens, setPersonagens] = useState<Personagem[]>([]);
const [nome, setNome] = useState('');
const [imagem, setImagem] = useState('');
const [voz, setVoz] = useState(vozesDisponiveis[0]);

const adicionarPersonagem = () => {
const novo = { id: Date.now(), nome, imagem, voz };
setPersonagens([...personagens, novo]);
setNome('');
setImagem('');
setVoz(vozesDisponiveis[0]);
};

const excluirPersonagem = (id: number) => {
setPersonagens(personagens.filter(p => p.id !== id));
};

return (
<div className="space-y-6">
<Card>
<CardContent className="space-y-4">
<div>
<Label>Nome do Personagem</Label>
<Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Ex: Thainá, Joãozinho..." />
</div>
<div>
<Label>Imagem do Avatar (URL)</Label>
<Input value={imagem} onChange={(e) => setImagem(e.target.value)} placeholder="https://..." />
</div>
<div>
<Label>Voz Associada</Label>
<select value={voz} onChange={(e) => setVoz(e.target.value)} className="border p-2 rounded w-full">
{vozesDisponiveis.map((v) => <option key={v}>{v}</option>)}
</select>
</div>
<Button onClick={adicionarPersonagem}>Salvar Personagem</Button>
</CardContent>
</Card>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
{personagens.map((p) => (
<Card key={p.id}>
<CardContent className="space-y-2 p-4">
<img src={p.imagem} alt={p.nome} className="w-full h-48 object-cover rounded" />
<div className="font-medium text-lg">{p.nome}</div>
<div className="text-sm text-muted-foreground">Voz: {p.voz}</div>
<Button variant="destructive" size="sm" onClick={() => excluirPersonagem(p.id)}><Trash2 className="w-4 h-4 mr-1" />Excluir</Button>
</CardContent>
</Card>
))}
</div>
</div>
);
}
#### ModeloIA.tsx
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Wand2, Upload, Mic, Image, Video } from 'lucide-react';

export default function ModeloIA() {
const [nome, setNome] = useState('');
const [imagemReferencia, setImagemReferencia] = useState<File | null>(null);
const [vozReferencia, setVozReferencia] = useState<File | null>(null);
const [estiloVisual, setEstiloVisual] = useState('realista');
const [busto, setBusto] = useState(50);
const [altura, setAltura] = useState(170);
const [corCabelo, setCorCabelo] = useState('#000000');
const [prompt, setPrompt] = useState('');
const [seed, setSeed] = useState('');

const estilosVisuais = [
{ id: 'realista', label: 'Realista' },
{ id: 'anime', label: 'Anime' },
{ id: '3d', label: '3D' },
{ id: 'nsfw', label: 'NSFW' },
];

const handleImagemReferenciaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
if (e.target.files && e.target.files[0]) {
setImagemReferencia(e.target.files[0]);
}
};

const handleVozReferenciaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
if (e.target.files && e.target.files[0]) {
setVozReferencia(e.target.files[0]);
}
};

const gerarSeed = () => {
const novaSeed = Math.floor(Math.random() * 999999).toString();
setSeed(novaSeed);
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Aqui você pode adicionar a lógica para enviar os dados para o backend
console.log({ nome, imagemReferencia, vozReferencia, estiloVisual, busto, altura, corCabelo, prompt, seed });
};

return (
<Card>
<CardContent className="space-y-4 p-4">
<form onSubmit={handleSubmit}>
<div>
<Label>Nome do Personagem</Label>
<Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome do personagem" />
</div>

<div>
<Label>Imagem de Referência</Label>
<div className="flex items-center gap-2">
<Input type="file" onChange={handleImagemReferenciaChange} />
<Upload className="w-4 h-4" />
</div>
</div>

<div>
<Label>Voz de Referência</Label>
<div className="flex items-center gap-2">
<Input type="file" onChange={handleVozReferenciaChange} />
<Mic className="w-4 h-4" />
</div>
</div>

<div>
<Label>Estilo Visual</Label>
<select value={estiloVisual} onChange={(e) => setEstiloVisual(e.target.value)} className="border rounded w-full p-2">
{estilosVisuais.map((estilo) => (
<option key={estilo.id} value={estilo.id}>{estilo.label}</option>
))}
</select>
</div>

<div>
<Label>Ajuste de Busto</Label>
<Slider value={[busto]} onValueChange={(value) => setBusto(value[0])} max={100} step={1} />
</div>

<div>
<Label>Altura (cm)</Label>
<Input type="number" value={altura} onChange={(e) => setAltura(parseInt(e.target.value))} />
</div>

<div>
<Label>Cor do Cabelo</Label>
<Input type="color" value={corCabelo} onChange={(e) => setCorCabelo(e.target.value)} />
</div>

<div>
<Label>Prompt Detalhado</Label>
<Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Descreva características específicas..." />
</div>

<div className="flex gap-2 items-end">
<div className="flex-1">
<Label>Seed</Label>
<Input value={seed} onChange={(e) => setSeed(e.target.value)} placeholder="Digite a seed" />
</div>
<Button type="button" variant="outline" onClick={gerarSeed}>
<Wand2 className="w-4 h-4 mr-1" /> Gerar Seed Aleatória
</Button>
</div>

<Button type="submit" className="w-full">
<Image className="w-4 h-4 mr-1" /> Gerar Personagem
</Button>
</form>
</CardContent>
</Card>
);
}
#### Configuracoes.tsx
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

export default function Configuracoes() {
const [diretorio, setDiretorio] = useState('D:/InVideozinho/Midia');
const [vozPadrao, setVozPadrao] = useState('Narrador Masculino');
const [temaClaro, setTemaClaro] = useState(true);

return (
<Card>
<CardContent className="space-y-6 p-4">
<div>
<Label>Diretório Padrão</Label>
<Input
value={diretorio}
onChange={(e) => setDiretorio(e.target.value)}
placeholder="Ex: D:/InVideozinho/Midia"
/>
</div>
<div>
<Label>Modelo de Voz Padrão</Label>
<select
value={vozPadrao}
onChange={(e) => setVozPadrao(e.target.value)}
className="border p-2 rounded w-full"
>
<option>Narrador Masculino</option>
<option>Narradora Feminina</option>
<option>Infantil</option>
<option>Robótica</option>
</select>
</div>
<div className="flex items-center justify-between">
<Label>Tema Claro</Label>
<Switch checked={temaClaro} onCheckedChange={setTemaClaro} />
</div>
<div className="flex gap-2">
<Button variant="outline">Exportar Configurações</Button>
<Button variant="secondary">Importar Configurações</Button>
</div>
</CardContent>
</Card>
);
}
#### N8NPanel.tsx
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Play } from 'lucide-react';

export default function N8NPanel() {
const [endpoint, setEndpoint] = useState('http://localhost:5678/webhook/invideo');
const [executando, setExecutando] = useState(false);
const [resultado, setResultado] = useState<string | null>(null);

const executarFluxo = async () => {
setExecutando(true);
try {
const res = await fetch(endpoint, { method: 'POST' });
const data = await res.text();
setResultado(data);
} catch (err) {
setResultado('Erro ao conectar ao N8N. Verifique a URL.');
} finally {
setExecutando(false);
}
};

return (
<Card>
<CardContent className="space-y-4 p-4">
<div>
<Label>Endpoint do N8N</Label>
<Input
value={endpoint}
onChange={(e) => setEndpoint(e.target.value)}
placeholder="http://localhost:5678/webhook/nome-do-fluxo"
/>
</div>
<Button onClick={executarFluxo} disabled={executando} className="w-full">
{executando ? <><Loader2 className="animate-spin w-4 h-4 mr-2" /> Executando...</> : <><Play className="w-4 h-4 mr-2" />Executar via N8N</>}
</Button>
{resultado && <div className="text-sm text-muted-foreground">Resultado: {resultado}</div>}
</CardContent>
</Card>
);
}
#### LipSyncPanel.tsx
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Mic } from 'lucide-react';

export default function LipSyncPanel() {
const [imagem, setImagem] = useState('');
const [audio, setAudio] = useState('');
const [gerando, setGerando] = useState(false);
const [resultado, setResultado] = useState<string | null>(null);

const aplicarLipSync = async () => {
setGerando(true);
try {
const res = await fetch('http://localhost:8000/lipsync', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ imagem, audio })
});
const data = await res.json();
setResultado(data.output_url);
} catch (err) {
setResultado('Erro ao aplicar lip sync. Verifique o serviço local.');
} finally {
setGerando(false);
}
};

return (
<Card>
<CardContent className="space-y-4 p-4">
<div>
<Label>Imagem do Personagem (URL)</Label>
<Input value={imagem} onChange={(e) => setImagem(e.target.value)} placeholder="Ex: /outputs/personagem.png" />
</div>
<div>
<Label>Áudio para Narração (URL)</Label>
<Input value={audio} onChange={(e) => setAudio(e.target.value)} placeholder="Ex: /audios/fala.mp3" />
</div>
<Button onClick={aplicarLipSync} disabled={gerando} className="w-full">
{gerando ? <><Loader2 className="animate-spin w-4 h-4 mr-2" /> Aplicando...</> : <><Mic className="w-4 h-4 mr-2" />Aplicar Sincronização Labial</>}
</Button>
{resultado && (
<video controls src={resultado} className="w-full rounded mt-2" />
)}
</CardContent>
</Card>
);
}
#### TransicaoSelector.tsx
import { Label } from '@/components/ui/label';

const transicoes = ['Nenhuma', 'Fade', 'Slide', 'Zoom'];

export default function TransicaoSelector({ value, onChange }: { value: string; onChange: (val: string) => void }) {
return (
<div className="space-y-1">
<Label>Transição entre cenas</Label>
<select
value={value}
onChange={(e) => onChange(e.target.value)}
className="border rounded w-full p-2"
>
{transicoes.map((t) => (
<option key={t}>{t}</option>
))}
</select>
</div>
);
}
#### TemplateSelector.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const templates = [
{ nome: 'Vídeo Receita', descricao: 'Apresente ingredientes, modo de preparo e finalização', cenas: ['Hoje vamos fazer...', 'Você vai precisar de...', 'Agora é só aproveitar!'] },
{ nome: 'Apresentação de Produto', descricao: 'Mostre benefícios e chamada de ação', cenas: ['Você já conhece...', 'Este produto faz...', 'Aproveite hoje mesmo!'] },
{ nome: 'História Infantil', descricao: 'Conte uma narrativa com personagens', cenas: ['Era uma vez...', 'Então o personagem...', 'E todos viveram felizes.'] }
];

export default function TemplateSelector({ onSelecionar }: { onSelecionar: (cenas: string[]) => void }) {
return (
<div className="grid md:grid-cols-2 gap-4">
{templates.map((t) => (
<Card key={t.nome}>
<CardContent className="space-y-2 p-4">
<h3 className="text-lg font-bold">{t.nome}</h3>
<p className="text-sm text-muted-foreground">{t.descricao}</p>
<Button onClick={() => onSelecionar(t.cenas)}>Usar Template</Button>
</CardContent>
</Card>
))}
</div>
);
}
#### ThumbnailGenerator.tsx
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ThumbnailGenerator() {
const [titulo, setTitulo] = useState('');
const [imagem, setImagem] = useState('https://via.placeholder.com/512x288');

const gerar = () => {
// Simulação de geração de thumbnail com texto
alert(`Thumbnail gerada para: ${titulo}`);
};

return (
<Card>
<CardContent className="space-y-4 p-4">
<Input
value={titulo}
onChange={(e) => setTitulo(e.target.value)}
placeholder="Digite o título do vídeo"
/>
<img src={imagem} alt="Preview" className="rounded w-full" />
<Button onClick={gerar} className="w-full">Gerar Thumbnail</Button>
</CardContent>
</Card>
);
}
#### ShortsGenerator.tsx
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ShortsGenerator() {
const [videoOriginal, setVideoOriginal] = useState('');
const [inicio, setInicio] = useState('00:00');
const [fim, setFim] = useState('00:15');

const gerarShort = () => {
alert(`Short gerado de ${inicio} a ${fim} do vídeo ${videoOriginal}`);
};

return (
<Card>
<CardContent className="space-y-4 p-4">
<Input
value={videoOriginal}
onChange={(e) => setVideoOriginal(e.target.value)}
placeholder="URL/local do vídeo original"
/>
<div className="flex gap-2">
<Input value={inicio} onChange={(e) => setInicio(e.target.value)} placeholder="Início (ex: 00:00)" />
<Input value={fim} onChange={(e) => setFim(e.target.value)} placeholder="Fim (ex: 00:15)" />
</div>
<Button onClick={gerarShort} className="w-full">Gerar Versão para Shorts</Button>
</CardContent>
</Card>
);
}
#### BlogToVideo.tsx
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function BlogToVideo({ onGerar }: { onGerar: (cenas: string[]) => void }) {
const [texto, setTexto] = useState('');

const processar = () => {
const cenas = texto.split('\n').filter(l => l.trim() !== '');
onGerar(cenas);
};

return (
<Card>
<CardContent className="space-y-4 p-4">
<Textarea
value={texto}
onChange={(e) => setTexto(e.target.value)}
placeholder="Cole o texto do blog aqui..."
className="min-h-[150px]"
/>
<Button onClick={processar} className="w-full">Gerar Storyboard</Button>
</CardContent>
</Card>
);
}
#### TraducaoDublagem.tsx
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

const idiomas = ['en', 'es', 'fr', 'de', 'it', 'ja', 'pt'];

export default function TraducaoDublagem() {
const [arquivo, setArquivo] = useState('');
const [idioma, setIdioma] = useState('en');
const [resultado, setResultado] = useState<string | null>(null);

const traduzir = async () => {
try {
const res = await fetch('http://localhost:8001/traduzir', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ arquivo, idioma })
});
const data = await res.json();
setResultado(data.url);
} catch (err) {
setResultado('Erro na tradução/dublagem');
}
};

return (
<Card>
<CardContent className="space-y-4 p-4">
<Input
value={arquivo}
onChange={(e) => setArquivo(e.target.value)}
placeholder="/videos/meuvideo.mp4"
/>
<Select value={idioma} onValueChange={setIdioma}>
{idiomas.map((lang) => <option key={lang} value={lang}>{lang.toUpperCase()}</option>)}
</Select>
<Button onClick={traduzir} className="w-full">Traduzir e Dublar</Button>
{resultado && <p className="text-sm text-muted-foreground">Arquivo: {resultado}</p>}
</CardContent>
</Card>
);
}
#### RenderFinal.tsx
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Download } from 'lucide-react';

export default function RenderFinal() {
const [nome, setNome] = useState('meuvideo-final');
const [resolucao, setResolucao] = useState('1080p');
const [gerando, setGerando] = useState(false);
const [concluido, setConcluido] = useState<string | null>(null);

const renderizar = async () => {
setGerando(true);
try {
const res = await fetch('http://localhost:9000/render', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ nome, resolucao })
});
const data = await res.json();
setConcluido(data.url);
} catch (err) {
setConcluido('Erro na renderização');
} finally {
setGerando(false);
}
};

return (
<Card>
<CardContent className="space-y-4 p-4">
<Input
value={nome}
onChange={(e) => setNome(e.target.value)}
placeholder="Nome do arquivo final"
/>
<select value={resolucao} onChange={(e) => setResolucao(e.target.value)} className="w-full border p-2 rounded">
<option value="720p">1280x720 (HD)</option>
<option value="1080p">1920x1080 (Full HD)</option>
<option value="4k">3840x2160 (4K)</option>
</select>
<Button onClick={renderizar} disabled={gerando} className="w-full">
{gerando ? <><Loader2 className="animate-spin w-4 h-4 mr-2" /> Exportando...</> : 'Exportar Vídeo Final'}
</Button>
{concluido && (
<a href={concluido} className="block text-center mt-2 underline text-sm text-primary flex items-center justify-center gap-2">
<Download className="w-4 h-4" /> Baixar Vídeo
</a>
)}
</CardContent>
</Card>
);
}
### Código das Páginas
#### Home.tsx
export default function Home() {
return <div className="text-lg font-semibold">Bem-vindo ao InVideozinho!</div>;
}
#### Criar.tsx
import ImageCreator from '../components/ImageCreator';
import AudioCreator from '../components/AudioCreator';
import StoryboardEditor from '../components/StoryboardEditor';

export default function Criar() {
return (
<div className="space-y-4">
<h2 className="text-2xl font-bold">Criar Vídeo</h2>
<StoryboardEditor />
<h2 className="text-2xl font-bold">Criar Imagem</h2>
<ImageCreator />
<h2 className="text-2xl font-bold">Criar Áudio</h2>
<AudioCreator />
</div>
);
}
#### Biblioteca.tsx
import Biblioteca from '../components/Biblioteca';

export default function BibliotecaPage() {
return (
<div className="space-y-4">
<h2 className="text-2xl font-bold">Biblioteca</h2>
<Biblioteca />
</div>
);
}
#### ModeloIA.tsx
import ModeloIA from '../components/ModeloIA';

export default function ModeloIAPage() {
return (
<div className="space-y-4">
<h2 className="text-2xl font-bold">Modelo IA</h2>
<ModeloIA />
</div>
);
}
#### Configuracoes.tsx
import Configuracoes from '../components/Configuracoes';

export default function ConfiguracoesPage() {
return (
<div className="space-y-4">
<h2 className="text-2xl font-bold">Configurações</h2>
<Configuracoes />
</div>
);
}
### Código Principal
#### App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Criar from './pages/Criar';
import Biblioteca from './pages/Biblioteca';
import ModeloIA from './pages/ModeloIA';
import Configuracoes from './pages/Configuracoes';

function App() {
return (
<Router>
<div className="flex min-h-screen">
<Sidebar />
<div className="flex-1 p-4">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/criar" element={<Criar />} />
<Route path="/biblioteca" element={<Biblioteca />} />
<Route path="/modelo-ia" element={<ModeloIA />} />
<Route path="/configuracoes" element={<Configuracoes />} />
</Routes>
</div>
</div>
</Router>
);
}

export default App;
#### main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<App />
</React.StrictMode>
);
### Instruções para Configuração e Execução
Instalação das Dependências:
npm install react react-dom react-router-dom lucide-react @radix-ui/react-tabs @radix-ui/react-dropdown-menu @radix-ui/react-switch
Configuração do TailwindCSS:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
Configuração do Vite (ou Create React App):
npm create vite@latest invideozinho --template react-ts
cd invideozinho
npm install
Estrutura de Pastas:
mkdir -p src/components src/pages
Execução do Projeto:
npm run dev
Integração com Ferramentas Locais:
Certifique-se de que todas as ferramentas locais (ComfyUI, N8N, Coqui TTS, Whisper, Wav2Lip, FFMPEG) estão instaladas e configuradas corretamente.
Configure os endpoints das APIs locais no código conforme necessário.
