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


# <a href="../Portada2.svg#3">![](../home.png)</a>


