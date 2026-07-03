# FieldOps — Design System · Progress doc
> Arquivo de sessão. Continua daqui na próxima vez.
> Spec canônica: `C:\Users\Admin\Downloads\case-B-design-system.md`

---

## Design Brief (pesquisa multiagente 2026-06-28)
`D:\20_studio\portfolio\docs\fieldops-ds-design-brief.md`

Decisões pendentes (sem implementar até Breno confirmar):
1. Surface field mobile: warm #F9F7F3 (atual) vs cold #F4F5F6 (recomendado)
2. Serif: manter Lora vs migrar para IBM Plex Serif
3. GuidedStep: adicionar variantes ao set atual vs recriar do zero
4. **Terracota: ajustar de #B04234 → #9C3B31** (5 pts mais escuro = arquitetônico, não artisanal)

---

## Tese central (não perder de vista)

> "A design system's quality is measured by how well it serves the constraints of the product it was built for."

Três restrições físicas governam TODAS as decisões:
1. **Luz solar direta** → contraste acima do piso WCAG AA em elementos críticos
2. **Luvas de trabalho** → tap target mínimo 48×48px (não 44pt do HIG)
3. **Conectividade instável** → estados dedicados de offline/sync — não um "error" genérico

A paleta quente é **consequência** dessas restrições (tons quentes seguram contraste sob luz amarela de ambiente industrial), não escolha estética. Isso importa para o texto do case.

---

## Figma
**File:** `DvmaageUcmQA6MzcsUYPgX`
**URL:** https://www.figma.com/design/DvmaageUcmQA6MzcsUYPgX/Design-System?node-id=0-1

---

## Hierarquia de tokens (3 camadas — spec)

A spec define **três** camadas. O Figma atual tem só duas:

| Camada | Exemplo | Status no Figma |
|---|---|---|
| Raw values | `#B04234`, `6px` | ✓ Primitives collection |
| Semantic tokens | `color.primary`, `color.surface.default` | ✓ Color/Spacing/Radius collections |
| **Component tokens** | `button.primary.background`, `input.border.focus` | ✗ Falta criar |

A terceira camada ainda não existe. Ela precisa de uma nova Variable Collection no Figma chamada `Component`. Os componentes se vinculam a ela, não direto à camada semântica. Isso é o que permite override de componente sem tocar no sistema semântico.

---

## Tokens existentes

### Coleções (IDs)
| Coleção | ID | Modo | Qtd |
|---|---|---|---|
| Primitives | VariableCollectionId:4:2 | 4:0 | 50 |
| Color (semântico) | VariableCollectionId:4:3 | Light=4:1 | 38 |
| Spacing | VariableCollectionId:4:4 | 4:2 | 9 |
| Radius | VariableCollectionId:4:5 | 4:3 | 5 |

### Variáveis-chave (semânticas — usar em component tokens)
```
action/primary        VariableID:8:21  → #B04234
action/primary-text   VariableID:8:24  → white
text/primary          VariableID:8:7   → neutral/900
text/disabled         VariableID:8:11  → neutral/300
border/default        VariableID:8:17  → neutral/200
border/focus          VariableID:8:19  → terracota/500
surface/page          VariableID:8:2   → sand/100 #F9F7F3
surface/sunken        VariableID:8:4   → sand/200
feedback/error-subtle VariableID:8:38  → error/50
feedback/error-text   VariableID:8:39  → error/700
radius/md             VariableID:8:54  → 6px
```

---

## Páginas e componentes prontos

### Páginas (14)
| Página | ID doc frame | Status |
|---|---|---|
| 🎨 Cover | 10:2 | ✓ |
| → Getting Started | 30:2 | ✓ |
| — Foundations: Color | 13:2 | ✓ |
| — Foundations: Typography | 23:2 | ✓ |
| — Foundations: Spacing & Radius | 24:2 | ✓ |
| ◻ Button | 17:2 (doc) · set 15:46 | ✓ parcial* |
| ◻ Input | 21:2 (doc) · set 19:80 | ✓ parcial* |
| ◻ Status Badge | 18:28 (doc) · set 18:27 | ✓ |
| ◻ Alert Banner | 22:91 (doc) · set 22:90 | ✓ |
| ◻ Order Card | 27:2 (doc) · set 26:178 | ✓ |
| ◻ Guided Step | 29:80 (doc) · set 29:79 | ✓ parcial** |
| ⚙ Utilities | 8:90 | vazia |

*parcial = componente existe, falta camada de component tokens e Code Connect real
**parcial = estados errados (ver seção abaixo)

### Componentes (81 variantes)
| Componente | Set ID | Variantes |
|---|---|---|
| Button | 15:46 | 20 (5 states × 4 variants) |
| Input | 19:80 | 15 (5 states × 3 types) |
| StatusBadge | 18:27 | 10 (2 states × 5 variants) |
| AlertBanner | 22:90 | 12 (3 states × 4 variants) |
| OrderCard | 26:178 | 12 (3 states × 4 statuses) |
| GuidedStep | 29:79 | 12 (3 types × 4 states) |

---

## Gaps críticos (vs. spec)

### 1 — GuidedStep: estados errados
O que foi construído: `Pending / Active / Completed / Skipped`
O que a spec pede: lógica de **bloqueio** explícita:
- `completion-unlocked` — campo preenchido, pode avançar
- `completion-blocked` — campo obrigatório não preenchido, botão de avançar desabilitado
- `optional` — pode pular sem bloqueio

Isso não é só cosmético — é a funcionalidade central: impedir que o técnico avance sob pressão de tempo sem preencher campos obrigatórios. O componente atual não modela isso. **Precisa refazer ou adicionar variantes.**

### 2 — OfflineIndicator: 3 estados precisos
Não existe ainda. A spec define 3 estados com semânticas distintas:
- `offline` → dados salvando localmente, NENHUMA ação necessária do usuário
- `syncing` → upload pendente, NÃO fechar o app
- `reconnecting` → retry ativo em andamento

Não é um "error banner" genérico. É um indicador de sistema persistente.

### 3 — SignatureCanvas: spec muito específica
Não existe ainda. Requisitos:
- Dimensionado para uso com uma mão em tela de 6"
- Captura timestamp + device ID no momento da assinatura
- Affordance de "assinar novamente" sem sair do workflow step

### 4 — Component tokens (3ª camada)
Nenhum componente usa a camada de component tokens — porque ela não foi criada. A spec menciona `button.primary.background`, `input.border.focus` como exemplos. Todos os componentes estão vinculados diretamente à camada semântica, o que é funcional mas viola a hierarquia documentada no case.

### 5 — Tap targets: verificar
A spec define 48×48px mínimo. Os botões e inputs foram criados com h=40px (MD) e h=32px (SM). **SM está abaixo do mínimo da spec.** Precisa revisar ou documentar explicitamente que SM é só para desktop admin (fora do escopo de field).

### 6 — Code Connect: é o artefato central do case
O case title é "Component Library with React Handoff". Code Connect não é só detalhe — é a tese. Os stubs existem como texto estático na doc page do Button, mas não estão configurados como Code Connect real no Figma. Seção 04 do case doc está explicitamente marcada "in progress" aguardando isso.

---

## O que falta construir

### v1.0 — para fechar o case
- [ ] **OfflineIndicator** — 3 estados: offline / syncing / reconnecting
- [ ] **SignatureCanvas** — one-handed, 6", timestamp+deviceID, re-sign
- [ ] **GuidedStep revisão** — adicionar lógica de bloqueio (unlocked/blocked/optional)
- [ ] **Component tokens** — nova coleção `Component` com `button.*`, `input.*`, etc.
- [ ] **Verificar tap targets** — documentar quais variantes são mobile vs. desktop

### v1.1 — nice to have
- [ ] **ConfidenceBadge** — sinal de confiança AI (crossover TriageAI)
- [ ] **OverridePanel** — painel de override de recomendação AI
- [ ] **⚙ Utilities** — grid overlay, breakpoints, exportação de tokens
- [ ] **Dark mode** — marcado como "v2 consideration" na spec — não implementar agora

---

## Notas técnicas (Plugin API)

- `figma.combineAsVariants()` empilha em (0,0) — sempre reposicionar manualmente depois
- `layoutSizingHorizontal = 'FILL'` só funciona APÓS `appendChild`
- `type: 'GRADIENT_RADIAL'` (nunca `'RADIAL'`)
- `v.setVariableCodeSyntax('WEB', 'var(--nome)')` é método, não property setter
- `PADDING` não é VariableScope válido — usar `GAP`, `WIDTH_HEIGHT`
- `await figma.setCurrentPageAsync(page)` — SEMPRE async
- Fontes: Inter `"Semi Bold"` (espaço), Lora `"SemiBold"` (sem espaço), JetBrains Mono `"Regular"`
- `clipContent` não existe em COMPONENT — só em FRAME
- `strokeWeight` muda sozinho se `strokes` array estiver vazio — sempre setar fills antes de strokes

---

## Contexto do case

- Case C do portfolio (FieldOps product)
- Produto: field service B2B, operadores em campo
- Canvas: `#F9F7F3`, primário: terracota `#B04234`
- Screens do produto (arquivo separado): Figma `2owo4P9E6CaDX6JqPZyJc0`
- O artefato deste DS é o que preenche a seção 04 do `case-B-design-system.md`
