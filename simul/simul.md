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

<span class="fragment current-visible">
Momento transverso lineal de fotones individuales para representar al tiempo $|t\rangle$ del sistema cuántico reloj $T$, 
y su polarización lineal para codificar al estado $|S_t\rangle$ del sistema cuántico $S$.</p>


##
<span class="fragment (appear)" data-fragment-index="2"><p>![](SETUP.jpg){height=400px}

##
El arreglo experimentar para simular evolución
cuántica paralela en el tiempo se presenta en la  Fig.~\ref{fig:setup}. En la primera parte, 
se ilumina con un láser de estado sólido de $660\text{nm}$,
el cual es filtrado y colimado de forma tal que incida en un 
modulador espacial de luz programable ({\it Spatial Light Modulator:} $\text{SLM}$) con una onda plana de fase aproximadamente constante y amplitud distribuida sobre la región de interés ({\it Region Of Interest: ROI}). 
Este SLM, basado en un micro-display de {\it Liquid Crystal-on-Silicon: (LCoS)} reflectivo, con una resolución 
espacial de 1024x768 píxeles, se emplea para representar al estado historia $|\Psi\rangle$, dando la posibilidad de modificar dinámicamente la función óptica en la pantalla, píxel a píxel.
En particular, el SLM utilizado en nuestro experimento,
está formado por un {\it HoloEye Lc-R 2500} 
en combinación con un polarizador (P1) 
y una placa de cuarto de onda (QW1) 
que provee el estado de luz
polarizada incidente adecuado 
para alcanzar la amplitud máxima
y modulación de fase entre dos polarizaciones ortogonales~\cite{marquez2001,marquez2008}.  %{\color{red} (ver si van estas Refs.)}. 
Esto nos permite tener un amplio rango de modulación de polarización para la cual la amplitud del campo electromagnético se mantiene constante,
independientemente del nivel de gris para el cual se configuran los píxeles del {\it LCoS}. A su vez, para este estado inicial,
no hay fase inicial adicional en el estado de salida debida al 
camino óptico. %In Fig.~\ref{fig:sphere} we see the output polarization states accessible trough the SLM when the input beam is prepared in a particular state elliptically polarized. Each point on the Bloch sphere corresponds to the particular grey level, between 0 and 255, addressed on the SLM.



# <a href="../Portada2.svg#3">![](../home.png)</a>


