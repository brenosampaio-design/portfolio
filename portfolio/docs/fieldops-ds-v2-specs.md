# FieldOps DS v2 — Specs de Refinamento
### Gerado: 2026-06-28 · Sessão de revisão sênior

> Sessão interrompida antes de compilar o HTML final.
> Este arquivo preserva os outputs dos agentes de pesquisa para continuar na próxima sessão.

---

## 1. Audit: Gaps críticos encontrados (Agente 1)

### Cores
- Nenhum contrast ratio documentado. `transit-text` (#624810) sobre `transit-bg` (#fdf6e3) ≈ 4.6:1 — passa AA para texto grande mas falha badge 12px/600.
- HTML usa aliases shorthand (`--n50`, `--tc500`) em vez dos nomes canônicos `--fo-*` — dois vocabulários = referência impossível.
- `--fo-color-interactive-subtle` sem `*-text` par (padrão triádico quebrado aqui).
- Faltam: `--fo-color-surface-elevated`, `--fo-color-focus-ring`.

### Tipografia
- `font-optical-sizing: auto` ausente — `opsz` axis carregado mas nunca aplicado.
- Geist Mono declarado no CSS mas ausente do HTML (não está no Google Fonts CDN).
- `font-variant-numeric: tabular-nums` ausente em tokens mono (ETAs e contadores vão tremer).
- `body-sm: 11px` abaixo do threshold de legibilidade Android (12px) — sem constraint documentado.
- Sem `letter-spacing` tokens para heading/body (só display e label-sm têm).

### Espaçamento
- `space-7` e `space-9` inexistentes — pulo de 24→32 sem token para 28px.
- `card-padding` usa `space-4` (16px) mas OrderCard usa `13px 15px 13px 18px` — zero tokens mapeiam esses valores.
- Margem horizontal da tela (`24px`) não tem token nomeado.

### Componentes
- Button: loading state é `opacity:.6` com texto hardcoded, sem spinner anatomy.
- FormField: sem state `success` (borda verde pós-validação).
- OrderCard: pressed/ripple state indefinido — crítico no Android.
- ProgressStep: dots de 8px — abaixo de 44px, devem ser não-interativos (nunca documentado).
- Avatar: sem `xl` token (52px só no HTML), sem image fallback, sem stack variant.
- ChecklistItem: checkbox de 20×20px — abaixo de 44px, sem hit-area padding documentado.

### Completamente ausente
- Motion: easing library (ease-out/in/spring) — só duration existe.
- Dark mode: zero tokens `prefers-color-scheme`.
- Focus ring: nenhum componente tem `:focus-visible` documentado.
- Skeleton/loading states.
- Toast/BottomSheet (z-index existe, componente não).
- Error/empty states (nenhuma OS hoje, sync falhou, step bloqueado).
- `aria-live="polite"` no OfflineIndicator (obrigatório — estado muda dinamicamente).

### Preservar exatamente
- Triads semânticos `--fo-color-status-{state}-{bg/text/dot}` — production-ready.
- Barra de acento 3px no OrderCard + badge redundante = accessibilidade correta.
- `--fo-touch-min: 44px` como token nomeado.
- Separação de papéis: Literata (autoridade), Manrope (funcional), Geist Mono (técnico).
- Filosofia do OfflineIndicator: comunica o que ESTÁ acontecendo, nunca bloqueia.
- Z-index layers (`base/raised/sticky/overlay/modal/toast`).

---

## 2. Sistema de Cores Refinado (Agente 2)

### Correções de palette
- `neutral-600: #4a4438` ADICIONADO — preenche gap 500→700.
- `clay-700: #8a2828` ADICIONADO — texto danger em dark mode.
- `sage-700: #3a5430` ADICIONADO — texto AA-safe para active/success.
- `amber-300: #d4a840` CORRIGIDO (estava cinza-marrom).
- `amber-700: #7a5410` ADICIONADO.
- `terra-700: #7a3418` ADICIONADO — link visited.

### Pares semânticos com WCAG ratio
| Par | Texto | Fundo | Ratio |
|-----|-------|-------|-------|
| active | sage-700 #3a5430 | sage-100 #d4e2ce | ~6.8:1 ✓ |
| paused | clay-700 #8a2828 | clay-100 #f5d5d5 | ~7.2:1 ✓ |
| transit | amber-700 #7a5410 | amber-100 #f5e4b4 | ~7.5:1 ✓ |
| done | neutral-600 #4a4438 | neutral-100 #edeae3 | ~6.1:1 ✓ |
| interactive | terra-50 #fdf0ec | terra-500 #b05c3a | ~4.8:1 ✓ |
| offline | neutral-300 #aba49a | neutral-700 #302a20 | ~5.4:1 ✓ |
| syncing | sage-500 #5e7a52 | sage-100 #d4e2ce | ~3.4:1 ⚠ texto grande only |
| reconnecting | amber-500 #a87a20 | amber-100 #f5e4b4 | ~3.6:1 ⚠ texto grande only |

### Decisão Danger (split)
- `clay-500 (#b84848)` sobre `clay-100` = ~4.1:1 — falha AA para texto normal.
- Solução: `--color-danger-text: clay-700 #8a2828` (body copy, labels) / `--color-danger-icon: clay-500` (ícones e badges grandes only).

### Novos tokens
- `--color-focus-ring: terra-500 #b05c3a, 3px solid, 2px offset`
- `--color-selection-bg: terra-500 @ 18%` (#edddd6 on white)
- `--color-link-default: terra-700 #7a3418` → ~6.2:1 ✓
- `--color-link-visited: neutral-600 #4a4438` → ~5.8:1 ✓

### Stack de superfícies
**Light mode:**
- `--surface-doc-bg: neutral-50 #f9f7f3`
- `--surface: #ffffff`
- `--surface-raised: #ffffff + shadow neutral-900 @ 12%`
- `--surface-overlay: rgba(26,21,16,0.70)`

**Dark mode:**
- `--surface-doc-bg: neutral-900 #1a1510`
- `--surface: neutral-800 #221e16`
- `--surface-raised: neutral-700 #302a20`
- `--surface-overlay: rgba(26,21,16,0.88)` — mais denso para luz ambiente outdoor

---

## 3. Tipografia, Espaçamento e Motion (Agente 3)

### Escala tipográfica — escala híbrida
Display usa Major Third (×1.25): 20→24→32→40→48 ✓
UI usa passos utilitários +2px (Ruder): 10→13→15→17px — valores fracionais em ratios proporcionais destroem hinting.

### opsz (Literata) — onde importa
- `display-2xl` (48px): `opsz 72` — corte high-contrast, tracking amplo
- `display-xl` (40px): `opsz 56`
- `display-lg` (32px): `opsz 40`
- `display-md` (24px): `opsz 28`
- `display-sm` (20px): `opsz 18` — **correção crítica**: serifa engrossava visivelmente com opsz default

### Regra label-sm — endurecida
10px / weight 700 / tracking 0.08em / SOMENTE CAPS. Sentence-case a 10px = ilegível com luvas. `mono-sm` espelha: CAPS ou numérico only, Bold.

### Reading width
- `body-lg`: `max-width: 60ch` — sem constraintno 390px mas previne renderização tablet acidental
- `body-md`: `max-width: 52ch` — descrições e textos de ajuda ficam escaneáveis

### Vocabulário de espaçamento (nomes confirmados)
```
micro:    2px   — separadores hairline
squish:   4px   — gap inline de chip (≠ tight)
tight:    8px   — padding estrutural mínimo
snug:     12px  — padding compacto de componente
base:     16px  — gap de componente padrão
loose:    20px  
spacious: 24px  — breathing room de layout
section:  32px  — separador de subsection
generous: 48px  
breath:   64px  — clearance de tab bar / FAB no Android
page:     80px  — separação entre sections maiores
```

### Motion tokens
| Token | Duration | Easing | Uso |
|-------|----------|--------|-----|
| fast | 120ms | ease-out | hover, micro-interações |
| base | 200ms | ease | transições padrão |
| reveal | 280ms | cubic-bezier(0.0, 0.0, 0.2, 1) | painéis entrando |
| dismiss | 200ms | cubic-bezier(0.4, 0.0, 1, 1) | painéis saindo (mais rápido) |
| bounce | 250ms | cubic-bezier(0.34, 1.56, 0.64, 1) | confirmação positiva (overshoot real) |

`prefers-reduced-motion`: colapsar tudo para fast/opacity-only.

---

## 4. Componentes — specs completos (Agente 4)

### StatusBadge
- Anatomy: dot 6px + label text
- States: active, paused, transit, done
- Dims: height 20px, padding 4px 8px, radius full, hit-area 44px via wrapper padding
- Non-negotiable: `--fo-color-status-{state}` determina dot e accent bar — nunca divergir
- DO: usar triads completos (dot + bg + text). DON'T: usar só cor como indicador (sem o label)
- A11y: `role="status"`, `aria-label="Status: Em campo"`

### OfflineIndicator
- Anatomy: icon 16px + label em Manrope 11px, integrado no nav bar
- States: offline ("Salvando localmente"), syncing ("Enviando..."), reconnecting ("Reconectando...")
- Dims: inline no nav, não ocupa linha própria, nenhum banner
- Non-negotiable: NUNCA bloquear o workflow. Sem modal, sem banner, sem "Sem Conexão"
- DO: comunicar o que está acontecendo. DON'T: comunicar o que está ausente
- A11y: `aria-live="polite"` obrigatório — estado muda dinamicamente

### Button
- Anatomy: [icon?] + label
- States: default, hover, pressed (scale 0.98), loading (spinner 16px), disabled (opacity 0.4, cursor not-allowed)
- Dims: lg 52px / md 44px / sm 36px height; px: 20/16/12px; radius: 10/8/6px
- Non-negotiable: md e lg sempre 44px+ — JAMAIS abaixo para campo
- DO: primary para ação principal por tela. DON'T: dois primary na mesma tela
- A11y: `aria-busy="true"` no loading state, `aria-disabled="true"` quando disabled

### FormField
- Anatomy: label flutuante + input area + hint/error text
- States: default, focused (borda terracotta + glow), error (clay-500), success (sage-500), disabled (opacity 0.5)
- Dims: height 52px, radius 14px, padding 14px, label 10px caps quando flutuando
- Non-negotiable: 52px mínimo — toque com luvas precisa de área grande
- DO: mostrar error inline com ícone + texto. DON'T: só mudar a cor da borda como feedback
- A11y: `aria-describedby` linkando field ao hint/error message

### NavigationBar
- Anatomy: background shell + título (Manrope 15px 700) + ações à direita + OfflineIndicator
- States: padrão, com back arrow (← título), com botão primário (+ Nova OS)
- Dims: height 56px, padding 0 16px
- Non-negotiable: OfflineIndicator sempre visível aqui — nunca remover por economia de espaço
- DO: ações primárias à direita, navegação à esquerda. DON'T: mais de 2 ícones de ação
- A11y: `role="navigation"`, `aria-label="Barra de navegação principal"`

### TabChip
- Anatomy: label + count badge (condicional)
- States: default, selected (bg terracotta), hover, disabled
- Dims: height 32px, padding 0 12px, radius full, badge 16px
- Non-negotiable: scroll horizontal para 4+ tabs — nunca comprimir labels
- DO: contar apenas itens acionáveis (não o total). DON'T: usar para navegação primária
- A11y: `role="tablist"` + `role="tab"` + `aria-selected`

### OrderCard
- Anatomy: accent bar 3px (left) + status badge + nome/endereço + ETA em mono
- States: default, pressed (opacity 0.92 + scale 0.99), done (opacity 0.7)
- Dims: width 342px, min-height 72px, padding 13px 15px 13px 18px, radius 12px
- Non-negotiable: APENAS 3 dados no card. Status, destino, quando. Tudo mais no detalhe.
- DO: accent bar cor = badge cor (redundância acessível). DON'T: adicionar 4º dado ao card
- A11y: `role="listitem"`, ETA com `aria-label="Horário previsto: 14h30"`

### ProgressStep
- Anatomy: dots de posição + label da step atual + counter "Passo X de Y"
- States: done (check), active (filled terracotta), pending (outline)
- Dims: dot 8px (não-interativo), counter em mono-sm, label em heading-md
- Non-negotiable: dots NÃO são touch targets (8px). Navegação é via botões Next/Back
- DO: mostrar apenas a step atual. DON'T: mostrar todas as perguntas de uma vez
- A11y: `aria-label="Passo 2 de 4: Diagnóstico"`, `role="progressbar"`

### Avatar
- Anatomy: círculo com iniciais em mono ou foto (quando disponível)
- States: default (initials), image, fallback-to-initials, loading-skeleton
- Dims: sm 24px / md 32px / lg 40px / xl 52px; cores: clay/sage/slate
- Non-negotiable: fallback sempre initials — nunca ícone genérico de pessoa
- DO: usar sage para técnico ativo, clay para pausado. DON'T: usar imagem sem fallback
- A11y: `aria-label="Avatar de {Nome}"`

### SignatureCanvas
- Anatomy: resumo da OS (5 linhas) + canvas full-width com baseline + botão Re-assinar abaixo
- States: empty (baseline visível + hint text), signed (assinatura renderizada), processing
- Dims: canvas min-height 88px, full width, radius 12px; botão Re-assinar 44px height
- Non-negotiable: botão Re-assinar ABAIXO do canvas, com label texto. NUNCA ícone X sobre a assinatura.
- DO: step dentro do GuidedStep (sequência natural). DON'T: tela separada via botão "Assinar"
- A11y: `aria-label="Área de assinatura do cliente"`, botão `aria-label="Limpar e re-assinar"`

---

## 5. Decisões transversais (Agente 4)

### Touch target discipline
Cada componente atinge 44px mínimo via: altura nativa (Button md/lg, FormField, Re-assinar) ou wrapper padding invisível (StatusBadge, TabChip, Avatar). Canvas é exceção — superfície de desenho, não target de toque.

### Token architecture crítica
Status color definido UMA VEZ em `--color-status-{state}` e consumido por StatusBadge dot E OrderCard accent bar. Se divergirem, o mapeamento visual entre card e badge quebra.

### OfflineIndicator é o único componente verdadeiramente non-negotiable
Suprimir em ferramenta offline-first é um problema de integridade de dados, não de design.

---

## Próxima sessão: compilar HTML v2

Com estes specs em mão, escrever o `fieldops-ds.html` v2 com:
- Dark mode por padrão + toggle light
- Todos os contrast ratios documentados
- opsz correto em Literata
- 10 componentes com todos os estados + DO/DON'T
- Motion tokens com curvas de bezier
- Focus ring e a11y notes integrados
- Vocabulário de espaçamento nomeado
