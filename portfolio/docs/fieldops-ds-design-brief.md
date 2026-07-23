# FieldOps Design System — Design Brief
> Gerado por pesquisa multiagente · 2026-06-28  
> Referências: Apple HIG, editorial warm-neutral systems, Linear, Polaris (Shopify), Primer (GitHub), Radix, Material 3, Tailwind v4

---

## Contexto da pesquisa

Cinco frentes de pesquisa investigaram: linguagem visual (Apple/editorial/Awwwards), arquitetura de tokens (Primer/Polaris/Radix/M3), B2B field UI premium, tipografia operacional e sistemas de cor quentes. Este brief sintetiza os achados em decisões acionáveis.

---

## 01 — O que separa Awwwards de "kit genérico"

A diferença não é estética — é **especificidade de intenção**.

Um kit genérico tem 12 variantes de botão sem razão. Awwwards-level tem 3 variantes com decisão escrita para cada uma. Concretamente:

- O estado offline é belo e específico ao contexto deste produto (técnico que acabou de entrar num porão)
- O estado empty não é ilustração genérica — é um mapa com prompt de ação
- O focus ring é `2px terracota, offset 2px` — não o default azul do browser
- Cada micro-decisão responde: "por que isso, e não outra coisa?"

**Referências que mostram esse padrão:**
1. **Garmin Connect / fenix OS** — melhor resolução atual de "legível outdoor + bonito" em contexto utilitário. Alto contraste, tap targets generosos, paleta restrita (chrome escuro + coral/laranja como único acento), zero ornamental.
2. **Linear.app** — benchmark de desktop manager layer. Único acento, Inter Variable, superfícies neutras frias (#F5F5F5, não warm), denso em informação mas não em visual.
3. **Editorial warm-neutral systems** — a combinação de sans geométrica, serif editorial e warm off-white é a referência mais próxima do que FieldOps DESKTOP poderia ser: quente, intelectual, confiável.

---

## 02 — Decisões de cor

### O que a pesquisa visual mostrou

Sistemas editoriais warm-neutral usam:
- **Fonte:** Styrene B (geométrico sans, Commercial Type) + Tiempos Text (serif transitional, Klim)
- **Paleta:** warm rust-orange `~#d97757` sobre warm off-white `#faf9f5`
- **O que faz funcionar:** o calor vem da tipografia e do acento — não do background. O layout é disciplinado e esparso. Nenhum gradiente, nenhum glass, nenhum glow.

### A tensão do FieldOps atual

A tese do case ("warmth é consequência funcional, não estética") é defensável — tons quentes seguram contraste sob luz amarela. **Mas**: paleta inteiramente quente + texto de alto contraste = "áspero sobre creme" visualmente. A mesma quantidade de calor percebido pode ser alcançada com menos ocorrência de warm.

### Dois caminhos a decidir

**Opção A — Mantém paleta quente em tudo (atual)**
- Surface: `#F9F7F3` sand/50
- Campo e desktop: mesma temperatura
- Pro: coerência, reforça tese do case
- Con: texto neutro/900 sobre #F9F7F3 lê como "pesado"; difícil de fazer parecer premium

**Opção B — Cold field, warm accent (recomendação da pesquisa)**
- Field mobile surface: `#F4F5F6` neutral/50 (frio)
- Desktop manager surface: `#F9F7F3` sand/50 (quente e editorial)
- Acento terracota: único, usado max 2x por tela
- Pro: mais nítido, mais operacional, melhor percepção de contraste, dual-register field vs. desktop
- Con: muda levemente a narrativa "warmth everywhere" do case

**Recomendação:** Opção B. O case pode argumentar que o field layer prioriza contraste máximo (cold) enquanto o manager layer prioriza conforto de leitura (warm) — ambos justificados pela mesma tese funcional.

### O ajuste de cor mais importante (achado crítico)

O terracota atual `#B04234` lê como "artisanal cerâmica" por dois motivos: leans orange (H6°) e lightness L44% cai na zona de esmalte de cerâmica. A versão **arquitetônica** do mesmo matiz é `#9C3B31` — 5 pontos de lightness mais escuro, ligeiramente menos laranja. Essa mudança única desloca a referência cultural de "Zara Home cushion" para "fachada Herzog & de Meuron". É a decisão de maior alavancagem no sistema inteiro.

O anchor `#faf9f5` também aparece em referências editoriais contemporâneas, reforçando a escolha atual.

### Paleta refinada

```
Primitivos — ajuste de valor:
  terracota/500  = #9C3B31  ← AJUSTE (era #B04234) — 5 pontos mais escuro = arquitetônico
  terracota/400  = #B04234  ← (o atual 500 vira 400 — mantém na ramp)
  sand/50        = #F9F7F3  ← canvas desktop warm-neutral
  
Adições:
  neutral/50     = #F4F5F6  ← canvas field mobile (mais fria — decisão P1)
  neutral/100    = #EAECEF
  neutral/200    = #D5D8DE
  neutral/300    = #B8BCC5
  neutral/500    = #737A8A
  neutral/700    = #414755
  neutral/900    = #111216  ← text primary

  warm-dark      = #1C1917  ← base dark mode (warm charcoal, C~0.006 OKLCH)
  warm-muted     = #9A9189  ← muted gray dark mode
```

### Status colors em sistema quente
Paletas de status precisam de ajuste de saturação para coexistir com terracota:
- **Success:** verde sálvia `#2E7D5F` (não verde brilhante — clash com terracota)
- **Warning:** âmbar escuro `#B06020` (não amarelo — ilegível em outdoor)
- **Error:** vermelho terracota-adjacent `#C1382B` (DIFERENTE do acento primário!)
- **Info:** slate-blue `#3C5A8A`

⚠️ Nota crítica: error `#C1382B` e terracota `#B04234` são tons próximos. Diferenciar via forma (ícone obrigatório em error) e peso (border + fill, nunca só cor).

---

## 03 — Tipografia

### Veredito: Lora / Inter / JetBrains Mono

**Inter — mantém.** Ubiquidade não é defeito em UI sans. Inter é máxima legibilidade em todos os tamanhos e pesos. A alternativa mais distinta seria Geist (Vercel) mas é menos testada em field contexts.

**Lora — condicional.** O risco é real: "Squarespace 2018" para quem reconhece. Opções:
- **Manter restrita:** só display ≥24px, somente no manager desktop layer. Zero Lora no field mobile.
- **Substituir por IBM Plex Serif:** projetada especificamente para interfaces de dados/utilidade (IBM). Excelente legibilidade de 14px–96px. Warmth sem rusticidade. Mais distinto que Lora em 2025/26.

**Recomendação:** Substituir Lora por IBM Plex Serif para field/utility. Mantém warm+intellectual mas é mais precisa e menos "lifestyle blog".

**JetBrains Mono — mantém.** Ainda o melhor monospace para IDs, coordenadas, timestamps.

### Escala tipográfica (field-first)

```
Display   96px  IBM Plex Serif Bold         -0.5px  LH: 100px  → títulos de cobertura
Heading1  48px  IBM Plex Serif SemiBold     -0.3px  LH: 52px   → títulos de seção
Heading2  32px  IBM Plex Serif Medium       -0.2px  LH: 38px   → títulos de card/modal
Heading3  24px  Inter SemiBold              -0.2px  LH: 30px   → labels de grupo
Heading4  20px  Inter SemiBold              -0.1px  LH: 28px   → subsection headers
Body LG   16px  Inter Regular               0px     LH: 24px   → body text principal
Body MD   14px  Inter Regular               0px     LH: 20px   → body secundário
Label     12px  Inter Medium                +0.1px  LH: 16px   → labels, captions
Caption   11px  Inter Medium                +0.2px  LH: 14px   → metadados, timestamps
Mono MD   14px  JetBrains Mono Regular      0px     LH: 20px   → IDs, coords, código
Mono SM   12px  JetBrains Mono Regular      0px     LH: 16px   → timestamps, hashes
```

**Floor field mobile:** 14px mínimo para qualquer texto informativo. 12px apenas para metadados não críticos.

---

## 04 — Arquitetura de tokens (o que os agentes descobriram)

### Três sistemas como referência

**Primer (GitHub)** — melhor disciplina de nomenclatura:
- `{property}-{role}-{state}` → `bgColor-accent-muted`, `fgColor-danger`
- Componentes: `button-primary-bgColor-rest`, `button-primary-bgColor-hover`
- Data-attribute theming (não só media queries)
- Regra: nunca use base tokens em componentes

**Polaris (Shopify)** — melhor separação surface/fill:
- `--p-color-bg-surface-*` (nível de página) vs `--p-color-bg-fill-*` (nível de componente)
- Space scale base-4px com multiplicadores numéricos
- Component tokens: `--p-color-input-bg-surface`, `--p-color-input-border`, etc.

**Material 3** — melhor convenção `on-*`:
- `on-primary` = "texto que vai EM CIMA do primary" — imediatamente legível
- State tokens como multiplicadores de opacidade, não cores separadas

### Sistema proposto para FieldOps

#### Camada 1 — Primitivos (Coleção: `Primitives`)

Valores brutos. Nunca usados direto em componentes.

```
color/terracota/50   #FDF0EE
color/terracota/100  #FAD7D2
color/terracota/200  #F5ADA6
color/terracota/300  #EF7C72
color/terracota/400  #C85043
color/terracota/500  #B04234  ← primary
color/terracota/600  #8E3028
color/terracota/700  #6C2219

color/sand/50    #F9F7F3  ← canvas desktop
color/sand/100   #F2EDE6
color/sand/200   #E5DDD0

color/neutral/50     #F4F5F6  ← canvas field (cold)
color/neutral/100    #EAECEF
color/neutral/200    #D5D8DE
color/neutral/300    #B8BCC5
color/neutral/500    #737A8A
color/neutral/700    #414755
color/neutral/900    #111216

color/sage/100   #D6E8DC
color/sage/500   #2E7D5F
color/sage/700   #1A4D3A

color/error/100  #FFDBD7
color/error/500  #C1382B
color/error/700  #8B1F17

color/warning/100  #FEEACB
color/warning/500  #B06020
color/warning/700  #7A4012
```

#### Camada 2 — Semântica (Coleção: `Color`, modos: Light / Dark)

Papel funcional, mode-aware.

```
// Superfícies
color/surface/page        Light→sand/50    Dark→neutral/900
color/surface/page-field  Light→neutral/50 Dark→neutral/950
color/surface/elevated    Light→white      Dark→neutral/800
color/surface/sunken      Light→sand/100   Dark→neutral/950
color/surface/overlay     Light→black@50%  Dark→black@70%

// Texto
color/text/primary       Light→neutral/900   Dark→neutral/50
color/text/secondary     Light→neutral/500   Dark→neutral/400
color/text/disabled      Light→neutral/300   Dark→neutral/600
color/text/on-action     Light→white         Dark→white
color/text/on-emphasis   Light→white         Dark→white

// Ações
color/action/primary         Light→terracota/500   Dark→terracota/400
color/action/primary-hover   Light→terracota/600   Dark→terracota/300
color/action/primary-active  Light→terracota/700   Dark→terracota/200
color/action/primary-disabled Light→terracota/200  Dark→terracota/700

// Bordas
color/border/default     Light→neutral/200   Dark→neutral/700
color/border/emphasis    Light→neutral/400   Dark→neutral/500
color/border/focus       Light→terracota/500 Dark→terracota/400
color/border/disabled    Light→neutral/200   Dark→neutral/800

// Status
color/status/success          Light→sage/500   Dark→sage/400
color/status/success-surface  Light→sage/100   Dark→sage/900
color/status/error            Light→error/500  Dark→error/400
color/status/error-surface    Light→error/100  Dark→error/900
color/status/warning          Light→warning/500  Dark→warning/400
color/status/warning-surface  Light→warning/100  Dark→warning/900

// Feedback (offline states — cores distintas de status genérico)
color/feedback/offline        Light→neutral/500   Dark→neutral/400
color/feedback/syncing        Light→#3C5A8A       Dark→#7B95C4
color/feedback/reconnecting   Light→warning/500   Dark→warning/400
```

#### Camada 3 — Componente (Coleção: `Component` — CRIAR NO FIGMA)

Scoped a cada componente. Referencia semântica, nunca primitivos.

```
// Button
button/primary/bg              → color/action/primary
button/primary/bg-hover        → color/action/primary-hover
button/primary/bg-active       → color/action/primary-active
button/primary/bg-disabled     → color/action/primary-disabled
button/primary/text            → color/text/on-action
button/secondary/bg            → transparent
button/secondary/bg-hover      → neutral/50
button/secondary/border        → color/border/default
button/secondary/text          → color/text/primary
button/ghost/bg-hover          → terracota/50
button/ghost/text              → color/action/primary

// Input
input/bg                → color/surface/elevated
input/bg-disabled       → color/surface/sunken
input/border-default    → color/border/default
input/border-hover      → color/border/emphasis
input/border-focus      → color/border/focus
input/border-error      → color/status/error
input/border-success    → color/status/success
input/border-disabled   → color/border/disabled
input/text              → color/text/primary
input/placeholder       → color/text/secondary
input/helper-text       → color/text/secondary
input/error-text        → color/status/error
input/label             → color/text/primary

// StatusBadge
badge/pending/bg        → neutral/100
badge/pending/text      → neutral/600
badge/active/bg         → terracota/50
badge/active/text       → terracota/600
badge/completed/bg      → sage/100
badge/completed/text    → sage/700
badge/error/bg          → error/100
badge/error/text        → error/700

// GuidedStep (spec correta — NÃO pending/active/completed/skipped)
step/indicator/unlocked/bg     → color/action/primary
step/indicator/unlocked/icon   → white
step/indicator/blocked/bg      → color/status/error-surface
step/indicator/blocked/border  → color/status/error
step/indicator/optional/bg     → neutral/100
step/indicator/optional/border → color/border/default
step/connector/default         → color/border/default
step/connector/complete        → color/status/success

// OfflineIndicator (componente novo)
offline/bg/offline             → color/surface/elevated
offline/bg/syncing             → #EBF0F8
offline/bg/reconnecting        → color/status/warning-surface
offline/text/offline           → color/feedback/offline
offline/text/syncing           → color/feedback/syncing
offline/text/reconnecting      → color/feedback/reconnecting
offline/icon/offline           → neutral/400
offline/icon/syncing           → #3C5A8A
offline/icon/reconnecting      → warning/500

// OrderCard
order-card/accent/pending      → neutral/300
order-card/accent/active       → color/action/primary
order-card/accent/completed    → color/status/success
order-card/accent/flagged      → color/status/error

// SignatureCanvas (componente novo)
signature/bg              → color/surface/elevated
signature/border          → color/border/focus (terracota/500)
signature/pen             → neutral/900
signature/meta-text       → color/text/secondary
signature/action-resign   → color/action/primary
```

### Naming convention CSS (Code Connect)

```
Figma path              → CSS custom property        → Tailwind utility
color/action/primary    → --color-action-primary     → bg-action-primary
color/text/secondary    → --color-text-secondary     → text-text-secondary
color/border/focus      → --color-border-focus       → border-border-focus
spacing/md              → --spacing-md               → p-md, gap-md
radius/md               → --radius-md                → rounded-md
```

Regra do Tailwind v4: tokens dentro de `@theme {}` geram automaticamente TANTO a CSS custom property QUANTO a utility class. Uma definição, dois usos.

---

## 05 — Sombras e elevação

**4 níveis, zero decorativo.** Sombras sinalizam camada, não textura.

```
elevation/ground   → none
elevation/raised   → 0px 1px 3px rgba(17,18,22, 0.10)   → cards, inputs
elevation/floating → 0px 4px 12px rgba(17,18,22, 0.15)  → modais, dropdowns
elevation/system   → 0px 8px 24px rgba(17,18,22, 0.20)  → toasts, drawers
```

Não usar: sombras coloridas, inner shadows decorativos, noise/texture, gradientes em sombra.

---

## 06 — Os 5 princípios visuais

**1. Constraint as aesthetic**
48px tap targets e 4.5:1 contraste não são limitações a esconder — são o grid. Botões grandes com padding generoso, touch zones full-bleed, spacing 24–32px entre itens. A restrição física é o language system.

**2. Um acento frio sobre campo quente**
Terracota `#B04234` é o único acento. Usado max 2x por tela: 1 para ação primária, 1 para estado ativo. O background pode ser quente (sand) ou neutro (field cold), mas a camada de interação é precisa. O contraste entre acento quente e campo frio = "precisão com caráter".

**3. Tipografia carrega 80% do peso informacional**
Sol, tela suja, luvas. Cor e sombra não são confiáveis outdoors. A hierarquia tipográfica (IBM Plex Serif para contexto, Inter para ação, JetBrains Mono para dados) deve ser legível sem qualquer cor de apoio.

**4. Quatro níveis de elevação, nada mais**
Ground → Raised → Floating → System. Sem texturas, sem sombras decorativas, sem glass ou blur que comprometa contraste.

**5. Todo estado interativo deve ser desenhado**
Focus ring: terracota 2px offset 2px, não azul browser. Loading em todo botão. Empty state não é ilustração genérica. Error state tem ação de recuperação. Offline state tem distinção entre offline / syncing / reconnecting. Este é o único diferenciador que um reviewer de Awwwards nota na primeira passada.

---

## 07 — O que construir agora (por prioridade)

### P0 — Para fechar o case (v1.0)

**1. Criar coleção `Component` no Figma**
Nova Variable Collection. Adicionar component tokens para Button, Input, StatusBadge, AlertBanner (os que já existem). Estes componentes passam a referenciar a 3ª camada, não a semântica diretamente.

**2. Refazer GuidedStep com estados corretos**
Substituir `Pending / Active / Completed / Skipped` por:
- `completion-unlocked` — campo preenchido, pode avançar
- `completion-blocked` — campo obrigatório vazio, botão avançar desabilitado
- `optional` — pode pular sem bloqueio

**3. Construir OfflineIndicator (novo)**
Componente persistente de sistema, 3 estados precisos:
- `offline` — salvo localmente, nenhuma ação necessária
- `syncing` — upload pendente, não fechar o app
- `reconnecting` — retry em progresso

**4. Construir SignatureCanvas (novo)**
- Dimensionado one-handed, 6"
- Captura timestamp + device ID no momento da assinatura
- Affordance re-sign sem sair do step
- Tap target da área de assinatura: full-width, min 200px height

**5. Revisar tap targets**
Documentar explicitamente: variantes SM (32px) = desktop-only, fora do escopo field. Adicionar anotação "⚠ Desktop Only" na doc page de cada componente com variante abaixo de 48px.

### P1 — Nice to have (v1.1)

- Considerar IBM Plex Serif vs Lora (decisão visual)
- Considerar surface field cold #F4F5F6 vs warm #F9F7F3 (decisão de duplo registro)
- Dark mode (marcado como v2 na spec — não implementar agora)
- ConfidenceBadge (crossover TriageAI)
- OverridePanel
- Utilities page (grid overlays, breakpoints, token export)

---

## 08 — As 3 decisões que ficam para o designer

Não são técnicas — são filosóficas. Precisam de aprovação antes de implementar:

| # | Decisão | Opção A | Opção B |
|---|---|---|---|
| 1 | Surface do field mobile | Warm sand `#F9F7F3` (atual) | Cold neutral `#F4F5F6` (recomendado) |
| 2 | Serif no sistema | Manter Lora (display ≥24px) | Migrar para IBM Plex Serif |
| 3 | GuidedStep | Adicionar variantes ao set atual | Recriar do zero com a lógica correta |

---

## 09 — Padrão DTCG para Code Connect (W3C v2025.10)

A pesquisa confirmou: o formato estável é `v2025.10` (primeiro stable release, out 2025). Para o Code Connect, a estrutura é:

```json
{
  "color": {
    "$type": "color",
    "action": {
      "primary": {
        "$value": "#9C3B31",
        "$description": "Primary action color. Used for CTAs and active states. Max 2 uses per screen."
      }
    }
  },
  "spacing": {
    "$type": "dimension",
    "md": { "$value": "16px" },
    "tap-target": { "$value": "48px", "$description": "Min touch target for gloved hand use" }
  }
}
```

Pipeline recomendado: **Tokens Studio** (Figma plugin) → `@tokens-studio/sd-transforms` → **Style Dictionary v4** → CSS custom properties + Tailwind v4 `@theme`.

---

## Referências dos agentes (pesquisa primária)

**Visual Language:**
- Editorial warm-neutral study: geometric sans + transitional serif, `--faf9f5` bg
- Apple NNGroup iOS 26 critique: Liquid Glass prejudicou legibilidade (contraste vs. beleza)
- Linear UI redesign: "every part of the product should feel like it was made by one person"

**Token Architecture:**
- Primer/primitives: `github.com/primer/primitives` — 3 layers, `{property}-{role}-{state}` naming
- Polaris: `--p-color-bg-surface-*` vs `--p-color-bg-fill-*` distinction
- Radix: 12-step ordinal scale, step 9 = solid fill, step 11 = secondary text
- shadcn: `--primary` + `--primary-foreground` minimal pairing
- Material 3: `on-*` convention, `--md-filled-button-container-color` → `var(--md-sys-color-primary)`
- Tailwind v4 `@theme`: one definition generates CSS var + utility class simultaneously
