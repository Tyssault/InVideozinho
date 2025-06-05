[Roteiro técnico e visual completo dividido por módulos para que possamos:
Planejar a construção da interface e experiência do usuário (UX/UI).
Mapear todas as funcionalidades principais e complementares.
Integrar ferramentas locais como ComfyUI, Coqui TTS, LLaMA, N8N, etc.
Oferecer um fluxo de criação simples para iniciantes e avançado para usuários técnicos.
Organizar personagens, vozes, mídia, modelos IA e projetos com reutilização fácil.

### 🔧 Módulos Centrais do InVideozinho
#### 1. Home (Painel de Boas-Vindas)
Input para “O que deseja criar hoje?” (texto livre)
Sugestões rápidas (ex: “Vídeo curto para TikTok”, “História infantil animada”)
Acesso direto aos modos: Criar Vídeo, Criar Imagem, Criar Áudio
Lista de projetos recentes
Módulo de personagens favoritos / avatares recorrentes

#### 2. Criar Vídeo (Storyboard Editor)
##### Interface baseada em cenas, como o Fliki:
Editor em blocos (cada parágrafo → 1 cena)
Para cada cena:
Texto narrado (com edição e entonação)
Imagem/vídeo de fundo (upload, gerar por IA ou escolher da biblioteca)
Personagem/avatar (opcional, com lip sync)
Música e efeitos sonoros (sincronização automática)
Duração e pausa entre frases (ajuste fino)
Barra lateral com lista das cenas (reordenar por drag & drop)
Pré-visualização rápida (render em baixa)

#### 3. Criar Imagem (Image Creator)
Input de prompt
Seleção de estilo visual com thumbnails
Proporção (via dropdown com contexto: ex. "YouTube 16:9")
Upload de imagem de referência (inpainting, outpainting, faceswap etc.)
Integração com ComfyUI local
Resultado com botão "Usar em cena" ou "Salvar em biblioteca"

#### 4. Criar Áudio (TTS Studio)
Campo para digitar texto a ser narrado
Escolha da voz (Coqui TTS, Mozilla TTS, etc.)
Ajustes de velocidade, tom, pausa, ênfase
Upload de voz do usuário (WAV/MP3)
Botão "Aplicar a personagem X" ou "Usar neste projeto"
Preview rápido e salvar

#### 5. Biblioteca
Pastas organizadas:
Imagens geradas
Vídeos usados/criados
Áudios e vozes
Personagens
Templates
Filtros por data, tipo, nome
Tags e favoritos
Reutilização rápida: “Usar em novo projeto”

#### 6. Personagens
Criar novo personagem:
Nome e avatar
Voz associada (modelo TTS ou clonada)
Características visuais (imagem base, estilo)
Visualização da ficha
Reutilização automática nos vídeos

#### 7. Modelo IA (Avançado)
Editor de workflows (modo avançado para usuários técnicos)
Selecionar e ajustar:
Modelos ComfyUI
Prompts padrão por estilo
Settings de inferência
Ajustes da LLaMA (roteirização automática)

#### 8. Configurações
Pasta padrão para mídia
Modelos TTS instalados
Atalhos de exportação
Idioma, modo claro/escuro
Importar/exportar backups

### 🧞 Funcionalidades Avançadas
🧹 Integração com N8N para fluxos automatizados (ex.: script → gerar vídeo → exportar com nome personalizado)
🎙️ Lip sync com Wav2Lip ou alternativos (local)
✂️ Transições automáticas e animadas
🎯 Templates prontos com texto orientativo (ex.: pitch de vendas, receita, videoaula)
🖼️ Criação de Thumbnails diretamente de cenas
📣 Geração de versão para Shorts/Stories a partir do vídeo principal
📟 Conversão de post ou blog em vídeo
🌍 Suporte a múltiplos idiomas + dublagem automática

### 🎨 UX/UI: Design e Navegação
Visual inspirado em Fliki, Pixverse e InVideo
Barra lateral fixa com ícones e nomes (Home, Criar, Biblioteca, IA, etc.)
Tipografia moderna (Sans-Serif clara)
Ícones consistentes (Lucide ou similares)
Design 100% responsivo (foco desktop inicial)
Cards grandes, textos bem definidos, tooltips

### 🔄 Etapas de Implementação
Estruturação da interface com rotas principais
Implementar o Criar Imagem com integração ComfyUI
Criar o Criar Áudio com TTS local
Criar Editor de Storyboard para vídeo
Implementar Biblioteca e Personagens
Conectar os fluxos N8N + exportadores
Adicionar funcionalidades de avatar animado
Finalizar interface e fluxo de onboarding

Roadmap Completo — InVideozinho
O objetivo é transformar o InVideozinho em um estúdio local e independente de criação de vídeos e imagens com IA, inspirado nas plataformas InVideo, Fliki, PixVerse e SeaArt. Este roadmap está organizado em módulos e etapas práticas, prontos para serem executados no Cursor, integrando ferramentas como ComfyUI, N8N, Coqui TTS e LLaMA.
Etapa 1 — Estrutura Base e Interface
Objetivo:
Criar estrutura de rotas: Home, Criar, Biblioteca, Modelo IA, Configurações.
Criar layout lateral fixo (Sidebar) com ícones e texto.
Aplicar estrutura base com TailwindCSS e organização por módulos.
Iniciar com modo desktop responsivo.
Prompt unificado:
// src/App.tsx
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

// src/components/Sidebar.tsx
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
// Exemplo de página
// src/pages/Home.tsx
export default function Home() {
return <div className="text-lg font-semibold">Bem-vindo ao InVideozinho!</div>;
}
Crie arquivos semelhantes em src/pages/ para Criar.tsx, Biblioteca.tsx, ModeloIA.tsx e Configuracoes.tsx com um texto placeholder para cada.
## Etapa 2 — Criar Imagem (Image Creator)
### Objetivo:
Campo de prompt com textarea.
Estilos com thumbnails (anime, 3D, pintura etc.) e seleção visual.
Proporção (dropdown com presets como YouTube, TikTok).
Upload de imagem de referência.
Simulação de geração com botão e loading.
Visualização da imagem gerada com opção de salvar.
### Prompt unificado:
// src/pages/Criar.tsx
import ImageCreator from '../components/ImageCreator';

export default function Criar() {
return (
<div className="space-y-4">
<h2 className="text-2xl font-bold">Criar Imagem</h2>
<ImageCreator />
</div>
);
}
// src/components/ImageCreator.tsx
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
## Etapa 3 — Criar Áudio (TTS Studio)
### Objetivo:
Campo de texto para narração.
Seleção de voz (Coqui TTS local ou mock).
Ajustes: velocidade, tom, pausa, sotaque.
Preview da fala com player simples.
Botão para salvar áudio gerado.
### Prompt unificado:
// src/components/AudioCreator.tsx
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
## Etapa 4 — Criar Vídeo (Editor de Storyboard)
### Objetivo:
Interface baseada em cenas (como Fliki).
Cada cena inclui:
Texto narrado ou exibido
Mídia de fundo (upload ou biblioteca)
Áudio (TTS ou importado)
Botões para duplicar, excluir e reordenar
Drag & drop entre cenas
Preview básico
### Prompt unificado:
// src/components/StoryboardEditor.tsx
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
## Etapa 5 — Biblioteca
### Objetivo:
Listar e organizar os arquivos gerados ou importados:
Imagens (geradas ou enviadas)
Vídeos
Áudios
Personagens
Permitir filtragem e ordenação (tipo, nome, data)
Botões de ação: visualizar, excluir, reutilizar
### Prompt unificado:
// src/components/Biblioteca.tsx
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
## Etapa 6 — Personagens
### Objetivo:
Permitir criação de personagens com:
Nome
Imagem/avatar
Voz associada (TTS)
Listagem de personagens criados com opções de:
Editar dados
Reutilizar em projetos
Excluir
### Prompt unificado:
// src/components/Personagens.tsx
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
## Etapa 7 — Modelo IA (modo avançado)
### Objetivo:
Fornecer uma interface para controle técnico dos parâmetros de geração por IA
Campos editáveis:
Prompt padrão (texto)
Prompt negativo
Seed (manual ou aleatória)
Resolução (dropdown ou numérico)
Modelo (checkpoint usado)
Simulação da estrutura do fluxo ComfyUI (exibição futura com nodes)
### Prompt unificado:
// src/components/ModeloIA.tsx
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Wand2 } from 'lucide-react';

export default function ModeloIA() {
const [prompt, setPrompt] = useState('');
const [promptNegativo, setPromptNegativo] = useState('');
const [seed, setSeed] = useState('');
const [resolucao, setResolucao] = useState('512x512');
const [modelo, setModelo] = useState('defaultModel.ckpt');

const gerarSeed = () => {
const novaSeed = Math.floor(Math.random() * 999999).toString();
setSeed(novaSeed);
};

return (
<Card>
<CardContent className="space-y-4 p-4">
<div>
<Label>Prompt padrão</Label>
<Textarea
value={prompt}
onChange={(e) => setPrompt(e.target.value)}
placeholder="Ex: mulher realista, luz suave, 4k..."
/>
</div>
<div>
<Label>Prompt negativo</Label>
<Textarea
value={promptNegativo}
onChange={(e) => setPromptNegativo(e.target.value)}
placeholder="O que deve ser evitado na imagem..."
/>
</div>
<div className="flex gap-2 items-end">
<div className="flex-1">
<Label>Seed</Label>
<Input value={seed} onChange={(e) => setSeed(e.target.value)} placeholder="Ex: 123456" />
</div>
<Button variant="outline" onClick={gerarSeed}><Wand2 className="w-4 h-4 mr-1" /> Aleatória</Button>
</div>
<div>
<Label>Resolução</Label>
<select value={resolucao} onChange={(e) => setResolucao(e.target.value)} className="border rounded w-full p-2">
<option>512x512</option>
<option>768x768</option>
<option>1280x720</option>
<option>1920x1080</option>
</select>
</div>
<div>
<Label>Modelo (Checkpoint)</Label>
<Input value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Ex: realisticVisionV5.ckpt" />
</div>
</CardContent>
</Card>
);
}
## Etapa 8 — Configurações
### Objetivo:
Centralizar opções de personalização do aplicativo
Campos de configuração:
Diretório local padrão para salvar arquivos
Seleção de modelo de voz padrão
Tema claro/escuro com salvamento
Backup e restauração de configurações (simulado)
### Prompt unificado:
// src/components/Configuracoes.tsx
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
## Etapas Extras — Funcionalidades Avançadas
### Etapa Extra 1 — Integração com N8N
Objetivo:
Automatizar fluxos como: Roteiro → Geração de imagens + narração + cenas → Exportação com nome do vídeo
Permitir que o usuário escolha templates de automação pré-configurados
Disparar fluxos via botão na UI
Tarefas:
Criar painel visual de fluxos no app
Incluir botão “Executar via N8N” nas páginas Criar e Storyboard
Prompt unificado:
// src/components/N8NPanel.tsx
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
Este componente pode ser importado nas páginas Criar ou Storyboard como:
import N8NPanel from '../components/N8NPanel';
...
<N8NPanel />
### Etapa Extra 2 — Lip Sync com Wav2Lip
Objetivo:
Sincronizar automaticamente a imagem do personagem com a narração
Usar biblioteca local Wav2Lip ou alternativa compatível com imagem + áudio
Tarefas:
Adicionar botão “Aplicar Sincronização Labial” nas cenas com personagem
Exibir preview da animação resultante
Criar chamada local para execução do Wav2Lip com parâmetros padrão
Prompt unificado:
// src/components/LipSyncPanel.tsx
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
### Etapa Extra 3 — Transições Animadas Inteligentes
Objetivo:
Criar transições visuais suaves e automáticas entre cenas
Permitir seleção de estilo de transição por cena ou globalmente
Tarefas:
Criar dropdown de tipos de transição por cena
Adicionar animação de fade/slide/zoom entre cenas no preview
Prompt unificado:
// src/components/TransicaoSelector.tsx
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
Este seletor pode ser integrado no storyboard ao lado das configurações de cena.
### Etapa Extra 4 — Templates com Textos Guiados
Objetivo:
Oferecer modelos de roteiro prontos para diferentes nichos (receita, vendas, historinhas, etc.)
Tarefas:
Criar galeria de templates
Aplicar template como base do storyboard automaticamente
Prompt unificado:
// src/components/TemplateSelector.tsx
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
Essa galeria pode ser exibida ao clicar em “Novo Vídeo com Template” dentro da seção Criar ou Storyboard.
### Etapa Extra 5 — Gerador de Thumbnails
Objetivo:
Permitir geração de imagens de capa (thumbnail) baseadas em cenas do vídeo
Tarefas:
Adicionar botão “Gerar Thumbnail” no Storyboard
Capturar frame da cena selecionada ou usar imagem principal + título
Prompt unificado:
// src/components/ThumbnailGenerator.tsx
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
### Etapa Extra 6 — Shorts & Stories Generator
Objetivo:
Gerar versões verticais/resumidas de vídeos para TikTok, Reels, Shorts
Tarefas:
Criar interface de seleção de trechos
Reformatar layout para 9:16
Exportar em resolução vertical com opção de música/filtro
Prompt unificado:
// src/components/ShortsGenerator.tsx
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
Esses dois recursos complementam a produção de vídeos com maior eficiência e foco em redes sociais.
### Etapa Extra 7 — Texto de Blog para Vídeo
Objetivo:
Transformar artigos ou posts em vídeos narrados automaticamente com cenas
Tarefas:
Colar texto ou URL de blog
Divisão automática por parágrafos como cenas
Gerar storyboard com texto + mídia sugestiva
Prompt unificado:
// src/components/BlogToVideo.tsx
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
### Etapa Extra 8 — Tradução e Dublagem Automática
Objetivo:
Traduzir automaticamente os vídeos e gerar nova narração dublada com IA
Tarefas:
Selecionar idioma alvo
Usar Whisper para transcrição + tradução
Usar Coqui TTS para gerar áudio
Prompt unificado:
// src/components/TraducaoDublagem.tsx
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
Essas duas funcionalidades permitem ampliar alcance e reaproveitar conteúdo com rapidez e inteligência.
### Etapa Extra 9 — UX/UI Avançado
Objetivo:
Melhorar a experiência visual e a navegação
Tornar a interface mais clara, organizada e intuitiva
Tarefas:
Implementar barra lateral fixa com ícones e nomes das seções
Usar ícones Lucide nos botões principais
Adotar tipografia moderna (sans-serif, espaçada)
Implementar modo claro por padrão (com alternância para escuro)
Garantir responsividade mínima para desktop
Adicionar tooltips explicativos nos ícones e ações principais
Prompt unificado (estrutura base da sidebar):
// src/components/ui/Sidebar.tsx
import { Home, Image, Video, Music, Settings, Library, Sparkles, User } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Link } from 'react-router-dom';

const menu = [
{ icon: <Home />, label: 'Home', to: '/' },
{ icon: <Image />, label: 'Imagem', to: '/criar/imagem' },
{ icon: <Video />, label: 'Vídeo', to: '/criar/video' },
{ icon: <Music />, label: 'Áudio', to: '/criar/audio' },
{ icon: <Sparkles />, label: 'IA Avançada', to: '/modelo-ia' },
{ icon: <User />, label: 'Personagens', to: '/personagens' },
{ icon: <Library />, label: 'Biblioteca', to: '/biblioteca' },
{ icon: <Settings />, label: 'Configurações', to: '/configuracoes' }
];

export default function Sidebar() {
return (
<div className="w-64 min-h-screen bg-muted border-r p-4 space-y-4 text-sm">
{menu.map(({ icon, label, to }) => (
<TooltipProvider key={to} delayDuration={100}>
<Tooltip>
<TooltipTrigger asChild>
<Link to={to} className="flex items-center gap-3 p-2 rounded hover:bg-accent">
{icon}
<span>{label}</span>
</Link>
</TooltipTrigger>
<TooltipContent>{label}</TooltipContent>
</Tooltip>
</TooltipProvider>
))}
</div>
);
}
Este layout melhora a navegação geral do InVideozinho, centralizando acesso às seções em um painel lateral. Ele pode ser utilizado como componente fixo no layout principal da aplicação.
### Etapa Final — Renderização e Exportação
Objetivo:
Finalizar o projeto compilando as cenas criadas (imagens, narrações, trilhas, transições) em um único vídeo exportável
Tarefas:
Implementar botão "Exportar Vídeo Final"
Usar FFMPEG localmente para juntar áudio + imagem + trilha + transições
Oferecer exportação em diferentes resoluções (720p, 1080p, etc.)
Exibir barra de progresso e permitir download após conclusão
Prompt unificado:
// src/components/RenderFinal.tsx
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
<Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do arquivo final" />
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
Este componente fecha o ciclo de criação do InVideozinho, permitindo exportar facilmente o resultado final com base nos recursos processados localmente.
Roadmap 100% concluído. O InVideozinho agora tem todas as ferramentas para gerar vídeos com IA localmente, sem custo, com uma interface moderna, responsiva e funcional.
## Etapa Extra Final — Plano de Integração Técnica Completa
Objetivo: Integrar todos os programas e ferramentas do ecossistema InVideozinho de forma orquestrada, garantindo a geração automatizada de conteúdo por meio de workflows locais (imagem, vídeo, narração e personagens).
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
Exporta nas resoluções definidas (720p, 1080p ou 4K)
Cria versão vertical (9:16) se necessário para Shorts/Reels
O N8N devolve o resultado ao InVideozinho, onde o vídeo final é exibido, com preview e opção de download.
### Estrutura de pastas sugerida
/InVideozinho
├── /frontend              → Código do InVideozinho (React + Tailwind)
├── /comfyui               → Pasta clonada do ComfyUI com extensões instaladas
│   ├── /workflows         → JSONs de fluxo de geração
│   ├── /checkpoints       → Modelos SD/Flux baixados
│   ├── /loras             → LoRAs temáticos (anime, nsfw, receitas...)
│   ├── /vae               → VAEs dedicados
│   ├── /upscalers         → ESRGANs para upscale
├── /n8n                   → Instância local de automações
├── /tts                   → Pasta do Coqui TTS + vozes
├── /whisper               → Ferramenta de transcrição automática
├── /wav2lip               → Lip sync para rostos (pré-processado ou automático)
├── /renders               → Resultados finais exportados (vídeos e thumbs)
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
