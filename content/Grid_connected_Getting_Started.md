Title: Getting started with grid connected PV
date: 2017-05-29

# Intro

Grid-connected PV systems can be divided: 

* Grid-connected with no battery backup (Also called 'straight grid-connected')
* Grid-connected with battery backup
    * dc-coupled systems
    * ac-coupled systems

The most commonly installed systems are grid-connected systems. We will
focus on this type of system for now.

### Applicable Codes and Standards (In France/Europe)

Coming soon.
We are looking here for general guidelines and requirements that
guarantee safety of the end user, installer and maintenance technician. 

* Sizes and types of switches, fuses, and wire to be used.
* Location of electrical components in the systems.
* Voltage Drop and wire sizing.
* Structural Considerations
* Proper use of switches, circuit breakers, fuses, types of
* Insulation and conductions, types of electrical conduit, proper
* Grounding
* Other
    * Aesthetics
    * Electromagnetic Interference
    * Surge Protection

# Design Considerations
Ok let's jump straight determining the system energy output.

Depending on the type of PV modules we will get certain module efficiency $\eta$ ranging from 6% to 20%. We can calculate a very vague approximation by utilizing an irradiance value at Standard Test Conditions (I_STC), which corresponds to a value of 1000W/m2. Our approximation starts at $\eta * 1000 W/m^2$.

Lets consider we can get some modules with 12% rated efficiency. This means that each square meter of PV module will be generating 120 Watts, only of course if the modules will be operating all the time at standard test conditions and at their maximum power points. So for this example, if we would like to generate 10kW of power, we will require 10,0000W/(.12*1000W/m2) = 83.33m2 of PV area.

>Good things to know: What is a typical space available in a south-facing rooftop of a typical west-Europe dwelling?

Until now, we have been talking about power (Watts), that is the instantaneous output of our system. Lets now talk **energy**. We will like to know how any kilowatts-hours can the system be expected to generate. To answer that question we will have to go through some important factors what will help us understand what will be the conversion efficiency of our system.

Starting from the inner technology of our modules, we already have a value of conversion (12%) in this case. In other words, what this value tells us is that the module is able to convert 12% of the incoming sunlight into electricity. But remember, this is just at module level. You may ask, what happens with the rest (82%) of the incoming sunlight? Well, a small part (about 4%) will just be reflected back and a big part will be absorbed, but not converted to energy, contributing to the heating of the module.

Modules will be connected in subgroups, called arrays. For each array we can calculate the output power based on the number of modules and the efficiency of the modules. Then, on top of our array output power, we will have to account for other losses occurring in other part of our system.Commonly classified into:

* Mismatch and soiling losses:
* Array temperature losses
* Inverter losses
* Wiring losses

No two modules are the same, each module will have a difference in output to the others, this is called **module mismatch**. When modules are combined into an array there will be losses due to the fact that the operating voltage and current will not be exactly the same for each module. We are putting soiling in the same category because dirty modules will also contribute to a mismatch loss in our array. The **temperature** of the array will also decrease the efficiency of our modules. Our **inverter**(s) will normally have an efficiency around 96%, meaning that we have an extra 4% loss of energy when converting from DC ot AC. Finally, some power will be lost in the **wiring** components of our system.

