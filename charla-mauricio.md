---
title: Estimación de constantes de acoplamiento magneticas
author:
  - Mauricio Matera
  - en colaboración con Carlos Lamas, Leonardo Errico, Arles Gil Rebasa y Victoria Fernández.
logoconference:  logoconf.png
logoaffiliation:  logo.png
---

Hamiltoniano electronico vs Modelo de Heisenberg
================================================

----------------------------


El modelo de Heisenberg
-----------------------

La descripción de los sistemas magnéticos a bajas temperaturas suele realizarse a través de modelos tipo Heisenberg, cuyos Hamiltonianos son de la forma
$$
{\bf H}= \sum_i g\mu_B \mu_0 \vec{h}\cdot \vec{\bf s}_i + \frac{1}{2}\sum_{\alpha}J_{\alpha} \sum_{(i,j) \in B_{\alpha}} \vec{\bf s}_i \cdot \vec{\bf s}_j 
$$

* El objetivo es calcular valores medios y correlaciones entre los operadores ${\bf s}_i$ respecto a estados térmicos
$$
\rho \propto e^{-{\bf H}/(kT)}
$$

* En particular, nos interesará predecir temperaturas de transiciones de fase, plateaus de magnetización, curvas de susceptibilidad, etc, que son funcionales de la magnetización del sistema:
$$
M=\sum_i \langle \vec{\bf s}_i\rangle= \sum_i {\rm Tr}(\rho  \vec{\bf s}_i)
$$

* Estos modelos pueden presentar un rico diagrama de fases, dependiendo de la magnitud de los espines locales, la conectividad ($B_{\alpha}$) y las constantes de acoplamiento $J_{\alpha}$.



--------------------------------------------------------------------------------

Noodelman (*J . Am. Chem. SOC. 102,4279 (1980)*)
----------------------------------------------------

* Mediante DFT, es posible estimar, en buena aproximación y en forma eficiente, la **energía mínima** de un sistema atómico, dada una cierta configuración magnética definida.
* Identificando el estado $|DFT(\{s_i\})\rangle_{atom}$  con el estado $|\{s_i\}\rangle_{h}=\otimes_i |s_i\rangle_i$ del modelo de Heisenberg, podemosafirmar que si el modelo es válido, $E^{(DFT)}(\{s_i\})= \langle \{s_i\} |{\bf H}| \{s_i\}\rangle+E_0$
* Como $\langle \{s_i\} |{\bf H}|\{s_i\}\rangle$ es **lineal** en $J_{\alpha}$, si el modelo fuese exacto, podríamos **despejar** $J_{\alpha}$ de las energías calculadas.
* Como el modelo no es exacto, dadas suficientes energías el sistema no tiene solución $\Rightarrow$ ajustamos los $J_{\alpha}$ por **mínimos cuadrados**.
* Conocidos los $J_{\alpha}$, podemos **predecir** el comportamiento magnético del material.


---------------------------------------------------------

* En los 80's, las mejores computadoras sólo podían resolver el problema para unos pocos átomos, y por lo tanto, era factible calcular todas las configuraciones magnéticas.
* El número de constantes de acoplamiento para estos modelos también era bastante modesto.
* En las últimas décadas, DFT logra calcular sistemas con cientos de átomos, por lo que calcular **todas** las configuraciones deja de ser viable.
* Al aumentar el número de átomos, crece también el número de constantes de acoplamiento a determinar.
* Todo esto lleva a que es común encontrar en la literatura reciente, varios trabajos sobre un mismo material con predicciones mutuamente excluyentes, dependiendo de qué configuraciones se utilizaron para calcular, con qué precisión se estimaron las energías, y qué parámetros extra se agregaron a la simulación  (ej, energías de correlación). 

. . .

Por esto, nos propusimos revisar la metodología a emplear en estos cálculos.



Estimación de las constantes de acoplamiento.
=============================================


-------------------------

Hipótesis
----------

* Lo que buscamos es que el modelo magnético reproduzca las energías sólo dentro de una cierta tolerancia, para *cualquier configuración*:  $$|E^{(DFT)}(\{s_i\}) -{\cal A}_{\{s_i\}} \vec{J} |< \varepsilon\,.$$
con $\vec{J}=(J_0,J_1,\ldots,J_m,E_0)^t$ y  ${\cal A}_{\{s_i\}} \cdot \vec{J}=E_0+\langle \{s_i\} |{\bf H}(J_\alpha)| \{s_i\}\rangle$.

* Elegiremos $\varepsilon > \varepsilon_0$, la precisión de nuestra simulación. Sin embargo, notemos que aún si $\varepsilon_0=0$, para
$\varepsilon$ suficientemente pequeño, el sistema se volverá incompatible (ya que están en juego grados de libertad no magnéticos). 

* Para un $\varepsilon$ dado, existirá una región ${\cal R}(\varepsilon)$ de valores posibles de $J_\alpha$ que dan modelos igualmente compatibles.

* Si sólo conocemos un subconjunto ${\cal C}$ de configuraciones, existirá una región ${\cal R}_{\cal C}(\varepsilon) \supset {\cal R}(\varepsilon)$
  de valores de $J_\alpha$  en las que para estas configuraciones, el modelo es compatible.
  
* El objetivo es elegir ${\cal C}$ de manera que ${\cal R}_{\cal C}(\varepsilon)$ sea tan pequeño como sea posible.


-------------------------------------------------------


* Para determinar ${\cal R}_{\cal C}$, necesitaríamos primero saber las energías para las configuraciones en ${\cal C}$.
* Sin embargo, 
  $$
   \frac{ \chi({\cal C},\vec{J})}{\sqrt{|{\cal C}|}} \leq  \max_{\{s_i\}\in {\cal C}}|E^{(DFT)}(\{s_i\}) -{\cal A}_{\{s_i\}} \cdot \vec{J}| \leq \chi({\cal C},\vec{J})
  $$
  con $\chi({\cal C},\vec{J})=\sqrt{\sum_{\{s_i\}\in {\cal C}} |E^{(DFT)}(\{s_i\}) -{\cal A}_{\{s_i\}} \cdot \vec{J}|^2}$
y $|{\cal C}|$ el número de configuraciones.

* Esto implica que si pedimos que  $\chi({\cal C,\vec{J}})<r$ (como Noodelman),
la región de compatibilidad ${\cal D}_{\cal C}(r)$ sería una elipse, centradas en la configuración de mínimos cuadrados, que contiene o está incluída en $R_{\cal C}(\varepsilon)$, de acuerdo a si $r=\varepsilon$ o $r=\varepsilon \sqrt{|{\cal C}|}$

-------------------------------------------------

La idea
--------

* El *tamaño* de la región ${\cal D}_{\cal C}(r)$  está acotado por $r C({\cal A})$, donde
$C({\cal A})= 1/ \max \sqrt{{\rm eig}({\cal A}^t {\cal A})}$ es el *número de condición* de la matriz ${\cal A}$
y es *independiente* de las energías a obtener por DFT.
* $\Rightarrow$ método eficiente para elegir ${\cal C}$.


:::::: {.columns }
::: {.column width=50% }
<img src="regions3d.png">

:::
::: {.column width=50% }
  <img src="regions.svg">
:::
::::::

--------------------------

Estimación de $J_{\alpha}$ y sus intervalos de confianza.
-------------------------------------------------------------

* Una vez calculadas las energías de las configuraciones en ${\cal C}$, podemos calcular
en forma eficiente el valor medio de $\vec{J}$ en ${\cal R}_{\cal C}(\varepsilon)$ como una integración Montecarlo.
* La incerteza puede ser estimada de la misma manera examinando los valores extremos que toman las muestras dentro de
${\cal R}_{\cal C}(\varepsilon)$.

:::::: {.columns }
::: {.column width=30% }
<img src="regions3d.png">
<img src="regions.svg">
:::
::: {.column width=60% }
<img src="regions-mc.gif">

:::
::::::


-----------------------------------------------

VisualBond Spectrojotometer
---------------------------

Para hacer accesible este método de análisis para la comunidad, implementamos una aplicación  (en estado beta) que automatiza los pasos de

* A partir de información cristalográfica (archivo .cif) generar modelos de Heisenberg con $J_{\alpha}$ en función de la distancia.
* Dado el modelo, determinar un conjunto de configuraciones óptimas.
* Una vez calculadas las energías de dichas configuraciones, determinar las constantes de acoplamiento.

. . .

:::::: {.columns }
::: {.column width=30%}
<img src="spectrojotometer.gif" width=100%>
:::
::: {.column width=60% style="text-align:left;"}

Los fuentes de la aplicación, implementada en Python 3.0, se encuentran disponibles en
[https://github.com/mmatera/spectrojotometer](https://github.com/mmatera/spectrojotometer)

Una versión pre-compilada para MS Windows se encuentra disponible en 
[http://www2.fisica.unlp.edu.ar/~matera/visualbond](http://www2.fisica.unlp.edu.ar/~matera/visualbond/)

:::
::::::








Ejemplo: determinación de las constantes de acoplamiento en $A_2Cu_5(TeO_3)(SO_4)_3(OH)_4$
============================================================================

---------------------------------------------------------

Nos proponemos ahora hacer una predicción de las curvas de susceptibilidad
magnética para el compuesto $A_2Cu_5(TeO_3)(SO_4)_3(OH)_4$
donde $A$ representa atomos de Sodio ($Na$) o Potasio ($K$) recientemente sintetizado

:::  {.cite  style="color:green;" }
*Inorg. Chem. 55, 644−648 (2016)*
::: 


<img src="molecula.svg" style="width:100%;">


. . .

En esta sustancia, la respuesta magnética está relacionada con el momento magnético efectivo de los átomos de $Cu$.

-----------------------------------------------


::::::::: {.columns }
:::::: {.column width=50%}
<img src="magnetic-susceptibility.svg" style="width:100%;">

<img src="fig6.svg" style="width:100%;">

:::  {.cite  style="color:green;" }
*Inorg. Chem. 55, 644−648 (2016)*
::: 

::::::
:::::: {.column width=50%}

En ese trabajo, se presentaron los primeros resultados para las medidas de susceptibilidad magnética de estos materiales. En la tabla, se presentan los parámetros reportados:


parámetro                       $Na$       $K$
------------                  ----------   ---------
$C$ ($\rm emu\, K/mol$)        2.88(2)       2.91(8)
$T_{CW}$ ($\rm K$)             -6.1(8)      -13.9(4)
$T_{\rm{cusp}}$ ($\rm K$)        2.4            5.2
$\mu_{Cu}$ ($\mu_{Bohr}$)         2.14(7)       2.16(1)



Aquí, $C$ y $T_{CW}$ son los parámetros del modelo de Curie-Weiss 
$$\chi(T,h) \approx  \frac{C}{T-T_{CW}} \hspace{1cm}(T/h \gg 1)\,,$$ $\mu_{Cu}$ es el momento magnético efectivo del $Cu$, determinado a partir de $C$.

::::::
:::::::::


------------------------------------------------------------------

El modelo
------------

:::::: {.columns }
::: {.column width=50%}
<img src="model.svg" style="width:100%;">

:::
::: {.column width=50%}

* Para modelar la respuesta magnética del material, asumimos  que cada átomo de $Cu$ se comporta como un espín $1/2$ (S=1/2,g=2) ($\mu_{e}=\mu_{Bohr}$)
* Asumimos que estos momentos magnéticos se acoplan entre si vía una interacción de intercambio simétrica (Heisenberg) segun la figura.
* Despreciamos interacciones de los espines con la red cristalina.
:::
::::::

---------------------------------------


Simulaciones ab-initio
-----------------------

* Para estimar los valores de $J_\alpha$, realizamos cálculos de primeros principios sobre una celda doble (dos unidades de red).
* Los cálculos se realizaron en la plataforma  Quantum Expresso.
* Para ambas sustancias, se relajó la red asumiendo una configuración ferromagnética.
* A partir de esa red, se estimaron las energías para un conjunto de configuraciones optimizadas (vía Visualbond):
* Se determinó que el momento magnético efectivo de los cobres, según la simulación es de $m=0.6 \mu_{Bohr}$
* Se determinó la región de compatibilidad para los $J_\alpha$.
* Finalmente se obtuvo la curva de magnetización a partir de la diagonalización exacta del Hamiltoniano de Heisenberg correspondiente.

----------------------------------------------------


Resultados
----------

:::::: {.columns }
::: {.column width=60% }

$J_{\alpha}$     $Na \\(\times 9.5 meV)$       $K \\(\times 20.4 meV)$     
------------    --------------------------  --------------------------
  $J_0$          $-0.24 \pm 0.18$	      	  $-0.47 \pm 0.19\;\;$        
  $J_1$          $-0.42 \pm 0.24$             	  $-0.28 \pm 0.25$         
  $J_2$          $-0.72 \pm 0.22$	      	  $-0.14 \pm 0.22$         
  $J_u$          $1.0 \pm 0.52$	              	  $0.33 \pm 0.61$         
  $J_d$          $.55 \pm 0.48$               	  $1.00 \pm 0.61$         

:::
::: {.column width=40% }

<img src="abinitio.svg">

:::
::::::


---------------------------------------------------

Predicciones
------------

:::::: {.columns }
::: {.column width=40% }

![](random-Na-chi.svg) 

![](random-K-chi.svg)
:::
::: {.column width=60% }
* Respecto al valor representativo, encontramos

  Valor                                             $Na$       $K$
---------------------------------------           --------   --------
$C_{CW} ({\rm emu}{\rm K}/{\rm mol})$              1.87       1.87
$T_{CW}({\rm K})$                                  1          0.36        
$T_{cusp}({\rm K})$                                3.38       2.89 


* Observamos que si bien dentro de un orden de magnitud los valores son semejantes a los de las curvas experimentales, las $T_{CW}$ tienen el signo opuesto, y la relación entre las $T_{cusp}$ del $Na$ y el $K$ se invierten.
* Sin embargo, observamos que para diferentes elecciones de $J_{\alpha}$ en la región de compatibilidad la respuesta magnética predicha puede variar considerablemente.
:::
::::::

------------------------------------------------

:::::: {.columns }
::: {.column width=40% }

![](random-Na-chi.svg) 

![](random-K-chi.svg)
:::
::: {.column width=60% }
* Elecciones al azar de los  $J_{\alpha}$ dentro del intervalo de confianza predicen temperaturas de Curie
que varían entre $0$ y $6.7$ ${\rm K}$ para el $Na$, y $-2.6$ y $2.9$ ${\rm K}$ para el $K$, mientras que para la $T_{cusp}$ encotramos que
para el $Na$ varían entre $0.36{\rm K}$ y $2.53{\rm K}$, mientras que para el $K$, van entre $5{\rm mK}$ y $3.5{\rm K}$.
* Por otro lado, notamos que la forma cualitativa de las cuevas de suceptibilidad son semejantes a las experiementales, pero que en algunos casos
presentan una segunda cúspide a una temperatura menor.
:::
::::::




-----------------------------------------------------------------

Discusión
----------

* A pesar del pequeño valor de las constantes de acoplamiento, con la precisión alcanzable con la tecnología actual, es posible estimar sus valores relativos.
* El corrimiento en la escala de las temperaturas características es atribuible  a los errores sistemáticos introducidos en DFT, que pueden variar la escala global de energías, dependiendo de cómo se estimen las energías de correlación.
* En general, la incerteza encontrada para los valores de $J_{\alpha}$ no sólo proviene de los errores sistemáticos en DFT, sino además de las limitaciones del del modelo de Heisenberg: reducir el error implicaría tener en cuenta efectos magnetoelásticos, que no pueden ser tenidos en cuenta en el modelo de Heisenberg, así como representar correctamente la magnitud de los momentos magnéticos atómicos.
* Por todo esto, concluímos que la estimación de los valores de  $J_{\alpha}$ en general **no determina completamente** el comportamiento magnético: sólo dá una guía sobre **qué fenómenos magnéticos vale la pena buscar en los experimentos**.
