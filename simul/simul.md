# Simulaciones Experimentales

# ¿Es Posible Vincular el Entrelazamiento Estudiado?

##
<span class="fragment (appear)" data-fragment-index="1"><p>
Relojes Cuánticos de Espines

<span class="fragment (appear)" data-fragment-index="2"><p>![](dimclock.svg){height=400px}
 
<span class="fragment (appear)" data-fragment-index="3"><p>

<p class="fragment grow">Partición adecuada $\rightarrow$ Simular Estados Historia</p>

##
<span class="fragment (appear)" data-fragment-index="1"><p>
Cadena de <b>2n</b> espines:<b>n</b> &quot;externos&quot; y <b>n</b> &quot;internos&quot;
$|\Psi\rangle=\sum_{J,L}C_{JL}|J\rangle|L\rangle$
<span class="fragment (appear)" data-fragment-index="2"><p>
$|J\rangle$ y $|L\rangle$: estados ortonormales. 

<span class="fragment (appear)" data-fragment-index="3"><p>
Descomposición de Schmidt,
$|\Psi\rangle=\sum_K  \sqrt{P_K}|K_I\rangle|-K_E\rangle$

<span class="fragment (appear)" data-fragment-index="4"><p>
<i>DFT</i> $\Longrightarrow$ Estado Historia &quot;Externo-Interno&quot;
<span class="fragment (appear)" data-fragment-index="5"><p>
$|\Psi\rangle=\sum_{\tau}\frac{1}{d^{n/2}}\exp[-iH_I\tau]|I_0\rangle|\tau\rangle$

<span class="fragment (appear)" data-fragment-index="6"><p>
$|\tau\rangle\equiv\frac{1}{\sqrt{d^n}}\sum_K e^{-i2\pi K\tau/d^n}|K_E\rangle$  
son estados ortonormales del &quot;reloj&quot; E, con $d=2s+1$,  

$\tau=0,\ldots,d^n-1$,  

$H_I|K_I\rangle=(2\pi K/d^n)|K_I\rangle$ 

$|I_0\rangle=\sum_K\sqrt{P_K}|K_I\rangle$ es el estado inicial efectivo del sistema $I$.  

##
<span class="fragment (appear)" data-fragment-index="1"><p>
Los estados de Schmidt $|K_{E}\rangle$ y $|K_I\rangle$ son <p style="color: red">complejos entrelazados (en general).</p>

<span class="fragment (appear)" data-fragment-index="2"><p> 
Gracias a campo medio de pares, el estado de la cadena dimerizada
<p style="color: blue">es simplemente $|\Psi\rangle=\otimes_{i=1}^n|\psi_i\rangle$ con $|\psi_i\rangle$ el estado del par $i$</p>
$|\psi_i\rangle=\sum_{k}\sqrt{p_k}|k_I\rangle|-k_E\rangle$
utilizando la descomposición de Schmidt del estado del par, con $k=1,\ldots,d$ y $d=2s+1$. 

<span class="fragment (appear)" data-fragment-index="3"><p>
Así, la descomposición de Schmidt toma la forma 
$|\Psi\rangle=\sum_{k_1\ldots,k_n}\sqrt{p}_{k_1}\ldots\sqrt{p}_{k_n}|k_{1I}\ldots k_{nI}\rangle|-k_{1E}\ldots -k_{nE}\rangle$

<span class="fragment (appear)" data-fragment-index="4"><p>
Los estados de Schmidt locales son precisamente estados producto de los $n$ espines $I$ o $E$. 
Los estados $|K_E\rangle=|k_{1E}\ldots k_{nE}\rangle$, 
con $k_i=1,\ldots, 2s+1$,  $K=1,\ldots d^n$, 
forman una base producto, con $K$ expresado en notación de base $d=2s+1$ (binaria si $s=1/2$, ``ternaria'' si $s=1$, etc.).


##
<span class="fragment (appear)" data-fragment-index="1"><p>
Los estados locales de tiempo son la <i>DFT</i> de los $|K_E\rangle$. 

<span class="fragment (appear)" data-fragment-index="2"><p>

<p class="fragment current-visible">El entrelazamiento &quot;sistema-tiempo&quot; 
es n veces el entrelazamiento de un par:</p> 

<span class="fragment (appear)" data-fragment-index="3"><p>
$E(S,T)=n S(|\psi_i\rangle)$, con $S(|\psi_i\rangle)=-\sum_k p_k \log_2 p_k$ 
 
<span class="fragment (appear)" data-fragment-index="4"><p>
Si el estado del par es máximamente entrelazado, $p_k=1/\sqrt{2s+1}$ 
$\forall$ $k$, $\rightarrow$ $|\Psi\rangle$ es máximamente entrelazado en esta partición,
por ende cualquier base local $|K_E\rangle$ resulta en este caso equivalente. 

<span class="fragment (appear)" data-fragment-index="5"><p>
Una cadena de espines puede simular estados historia, 
<p class="fragment grow">con una dimensión que crece exponencialmente con $n$</p> 

# ¿Es Posible Implementarlo Experimentalmente?

## Simulación de Estados Historia por Medios Ópticos

<p class="fragment current-visible">Colaboración con el <i>Laboratorio
de Procesado de Imágenes del Departamento de Física de la Facultad de Ciencias Exactas
de la Universidad de Buenos Aires</i></p> 

<p class="fragment current-visible">
Se utilizan fotones individuales:<br>
Polarización $\rightarrow$ estado $|S_t\rangle$ del sistema cuántico $S$<br>
Momento transverso $\rightarrow$ tiempo $|t\rangle$ del sistema cuántico reloj $T$.</p>


## El Arreglo Experimental

##

![](SETUP.jpg){height=400px}

<p class="fragment current-visible">Se ilumina con un láser de estado sólido de 660 nm.</p>

<p class="fragment current-visible"> 
Incide en un modulador espacial de luz programable <i>SLM: Spatial Light Modulator</i></p>

<p class="fragment current-visible">
Micro-display de <i>LCoS: Liquid Crystal-on-Silicon</i> reflectivo, con resolución 
de 1024x768 píxeles.</p>

<p class="fragment current-visible">
Permite modificar dinámicamente la función óptica píxel a píxel</p> 

<p class="fragment current-visible"> 
Simular el estado historia $|\Psi\rangle$</p>

<p class="fragment current-visible">En el <i>(PSA:Polarization State Analyzer)</i> <br>
se mide y caracteriza al <i>SLM</i></p>

<p class="fragment current-visible">
Se realizaron medidas de intensidad en el plano imagen (IP)<br> 
y de interferencia en el plano de Fourier (FP)</p>

<p class="fragment current-visible">Utilizando cámaras CCD y CMOS (alta sensibilidad)</p>


## ESQUEMA DEL SLM

![](SLM.jpg){height=400px}

<p class="fragment current-visible">
Se configuran ocho regiones rectangulares independientes en la pantalla</p>

<p class="fragment current-visible">
cada una con un nivel de gris constante particular.</p> 

<p class="fragment current-visible">
Permite generar ocho estados de polarización $|S_t\rangle$</p>


## 

<span class="fragment (appear)" data-fragment-index="1"><p>
Se genera el estado historia, donde el sistema $S$ 
y el sistema reloj $T$ son emulados a través 
de la polarización y el grado de libertad espacial.

<span class="fragment (appear)" data-fragment-index="2"><p>
$|\Psi\rangle\propto\sum_{t=0}^{N-1}\sum_{\mu,\nu}\alpha_\nu C_{\mu\nu}^{(t)}|\mu\rangle|t\rangle$
$\sum_{\mu,\nu}\alpha_\nu C_{\mu\nu}^{(t)}|\mu\rangle|t\rangle= (U_t\otimes I)|S_0\rangle|t\rangle\equiv |S_t\rangle|t\rangle$

<span class="fragment (appear)" data-fragment-index="3"><p>
 $|S_t\rangle=U_t|S_0\rangle=\sum_{\mu,\nu}\alpha_\nu C_{\mu\nu}^{(t)}|\mu\rangle$ <br>
es el estado de polarización asociado a la región  $t$.

<span class="fragment (appear)" data-fragment-index="4"><p>
Finalmente <p class="fragment highlight-green">$|\Psi\rangle\propto\sum_{t=0}^{N-1}U_t|S_0\rangle|t\rangle$</p>

<!--
<p class="fragment current-visible">
$|S_0\rangle|0\rangle\stackrel{\rm{SLM}}{\Longrightarrow}
\frac{1}{\sqrt{N}}\sum_{t=0}^{N-1}U_t|S_0\rangle|t\rangle={\cal W}\left(|S_0\rangle\sum_{t=0}^{N-1}\frac{1}{\sqrt{N}}|t\rangle\right)$

${\cal W}\left(I\otimes H\right)|S_0\rangle|0\rangle$

${\cal W}=\sum_t U_t\otimes|t\rangle\langle t|$
</p>



$|\Psi\rangle\propto\sum_{t=0}^{N-1}\sum_{\mu,\nu}\alpha_\nu C_{\mu\nu}^{(t)}|\mu\rangle|t\rangle$
\end{equation}
donde $|t\rangle=\frac{1}{\sqrt{A_t}}\int d\mathbf{x}\,{\rm rect}\!\left(\frac{x-x_t}{2a}\right){\rm rect}\!\left(\frac{y-y_t}{2b}\right)|1\mathbf{x}\rangle$. 

En la implementación experimental, la modulación introducida por el {\it SLM}
implica solamente una transformación en el grado de libertad de polarización. Esto significa que $\sum_{\mu,\nu}\alpha_\nu C_{\mu\nu}^{(t)}|\mu\rangle|t\rangle= (U_t\otimes\mathbbm{1})|S_0\rangle|t\rangle\equiv |S_t\rangle|t\rangle$, con $U_t$ 
una matriz unitaria tal que  $|S_t\rangle=U_t|S_0\rangle=\sum_{\mu,\nu}\alpha_\nu C_{\mu\nu}^{(t)}|\mu\rangle$ es el estado de polarización asociado a la región  $t$. Luego, el {\it SLM} transforma al estado inicial del fotón 
de la siguiente forma: -->

## Promedios Temporales
<span class="fragment (appear)" data-fragment-index="1"><p>
Se describió el arreglo experimental para simular estados historia.

<span class="fragment (appear)" data-fragment-index="2"><p>
- Podemos determinar el promedio temporal de valores medios del sistema, de dos formas:

 <span class="fragment (appear)" data-fragment-index="3"><p>
  <p class="fragment highlight-red">Por medio de medidas secuenciales en el sistema $S$</p>
 <p class="fragment highlight-blue">Con una sola medida sobre el estado historia, que contiene toda la evolución del sistema $S$.</p>
 <p class="fragment grow"> $\frac{1}{N} \sum_{t=0}^{N-1} \langle S_t|\hat{\sigma}_\mu|S_t\rangle= \langle\Psi|(\hat{\sigma}_\mu\otimes I)|\Psi\rangle$</p>

 <span class="fragment (appear)" data-fragment-index="4"><p>  
 <p class="fragment grow">Promedios temporales de la polarización del sistema <br> mediante una única medida.</p> 

## Simulación de Evoluciones

![](SphereF.svg){height=400px}

<p class="fragment current-visible">
Se verificó la relación introducida previamente:
$\langle E_2 (S,T)\rangle=\frac{d_S}{d_S+1}E_2({\cal W})$</p> 

<p class="fragment current-visible">
A través de una simulación sobre 1000 estados iniciales, con un error menor a 0.01.</p> 

# Concluciones

## Tratamiento de Campo Medio de Pares

<span class="fragment (appear)" data-fragment-index="1"><p>

![](cadenablue.svg){height=200px}

<span class="fragment (appear)" data-fragment-index="2"><p>
Permite describir correlaciones cuánticas y comportamiento magnético

<span class="fragment (appear)" data-fragment-index="3"><p>
<p class="fragment highlight-blue"> Generalización a distintas configuraciones y valores del espín</p>

<span class="fragment (appear)" data-fragment-index="4"><p>
<p class="fragment grow">Nuevos Diagramas de Fases</p>

## Modelo Cuántico de Tiempo

<span class="fragment (appear)" data-fragment-index="1"><p>
![](st1.svg){height=200px}

<span class="fragment (appear)" data-fragment-index="2"><p>
<p class="fragment highlight-green">Concepto de Entrelazamiento Sistema-Tiempo</p>

<span class="fragment (appear)" data-fragment-index="3"><p>
<p class="fragment highlight-blue">Extensión a Estados Historia de Operador</p>

<span class="fragment (appear)" data-fragment-index="4"><p>
<p class="fragment grow">Simulable Experimentalmente</p>


## Simulaciones Experimentales

<span class="fragment (appear)" data-fragment-index="1"><p>

Relojes Cuánticos de Espines

![](dimclock.svg){height=200px}

<span class="fragment (appear)" data-fragment-index="2"><p>

Simulación por Medios Ópticos

![](SETUP.jpg){height=200px}

## ¡Gracias!


# <a href="../Portada2.svg#3">![](../home.png)</a>


