<h1>
    <center>
        <u><b>THIS ARTICLE IS UNDER CONSTRUCTION</b></u>
    <center>
</h1>

They wanted to sue me. Kinda insane right?

# INTRODUCTION (2018-2019)
It's 2018, I'm not yet into computer science, basically a random dude playing games on his tablet. Around that time, I was interested in Minecraft mini-games, specifically "Bed wars." So one time, I went on the play store and installed the first Bed wars related game that came up. It was just a carbon copy of Minecraft, a well done carbon copy, at least on the outside. About two weeks later, I discovered that what I downloaded is part of a much bigger app called "Blockman GO."

That app contained loads of mini-games with additional features such as the ability to add friends, chat and play with them. I decided to give it a try and sticked to it for a little while but I eventually stopped playing it when I got my laptop in summer 2019 as the PC version was in maintenance.

Nevertheless during the first lockdown, I actually maybe, just maybe, JUST MAYBE came back to it, this time I was playing on "Bluestacks<sup>1</sup>" just, JUST 90% of the time.

1. An Android emulator

# I. THE BEGINNING (2020)
Enough context! Let's talk about the juicy stuff! It actually begins right now in summer 2020, the PC version is no longer in maintenance! A perfect time to check the game's files!

<p align="center">
    <img src="/static/game_nightmare/bg_pc_structure.png">
    <i>Blockman GO PC Version - File structure</i>
</p>

So let's list what we have here.
- The game executable<sup>1</sup> ('game.dat') and libraries<sup>2</sup>
- Tencent<sup>3</sup> Anti-Cheat Softwares (ACE & TQM)
- Assets ('Media' folder)
- Crafting recipes ('recipe' folder)
- Logs ('document' folder)
- Configurations ('config' folder)

1. An executable is a file that a computer can run
2. A library is a file that is required by the executable, for the executable to run properly
3. Tencent is a large company based in China and specialized in technology

Although, we are only going to focus on the Media folder and what it has to offer.

<p align="center">
    <img src="/static/game_nightmare/bg_pc_media_folder.png">
    <i>Note: I won't talk about the 'sandboxol' file for now (it wasn't there at that time)</i>
</p>

Let's introduce our first character: VECTOR. He greatly helped Blockman GO in its early phase and is the first modder of the game.

In Minecraft, it's a common thing to use texture packs. But here, there are no texture pack feature, so we have to modify the default textures directly. And that's what he did, he created multiple texture packs for the game during 2018 and 2019. He eventually left mostly because not many people cared about his work and **not even the company** that he helped.

He really motivated me to make my own stuff and so I did. I released two texture packs for Android. Check them out: <a href="https://youtu.be/TSEflt2VXYc?si=V2pUctMRR_sNipgR&t=64" target="_blank">this one</a> and <a href="https://youtu.be/dBGQH4Ux-n0?si=NtyaM6xCDs9nmZFK" target="_blank">that one</a>!

At some point I wanted to edit the texture of a UI<sup>1</sup>, but couldn't find it simply because the assets of the mini-games are stored in the 'Scripts' folder, and I never would have thought of it (Until I did lol). This folder is actually mostly used for storing the Lua<sup>2</sup> scripts.

That's our starting point to this journey. It's where everything truly begins (I promise it really starts to get interesting from here).

1. User Interface
2. A scripting language

# II. IS IT FAIR? (2021)

*A little side note*: during 2019 through December 2021, I used the nickname "Royalcraft" or "RoyalcraftDev" or even "Royal" for short before switching to "UndeadWolf._." and eventually "UNDEAD."
Please don't judge the names, I was playing Minecraft and Clash Royale when I chose it, really original I know I know, ANYWAY if you see any of these names later on, it's just me.

Let's start with what I achieved around may 2021.

<p align="center">
    <img src="/static/game_nightmare/bg_pc_cheats.png">
    <i>This sheet was last edited on may 24th 2021 - 'bg_cheats.txt' - Cheats I've done by modifying Lua scripts</i>
</p>

A few notes:
- The 'g' followed with 4 digits is the game ID<sup>1</sup>
- 'QBB' stands for 'Quick Block Builder': In Bed wars you could spend 5 gcubes<sup>2</sup> to place 3 blocks at once. You could freely enable or disable this feature with the help of a button. But here I found how to enable it without spending anything.
- The 'reach' is the maximum distance you can place/destroy blocks or hit entities. Even though there was an anti-cheat for it that kicked me from the game if I was setting the value too high, it was still very powerful.
- 'Block destroyer' allows you to destroy all blocks instantly.

1. Game Identifier - In Blockman GO each game has its own ID, for instance Bed wars has the ID 'g1008.'
2. **Golden cube** ("**Gcube**") is a **currency** you can spend **anywhere** on the app including in-game. The only way to obtain it is **by paying with real money**. Blockman GO is indeed **pay-to-win** (**p2w**)

All of this was achieved pretty easily. Here! Take a look!
```lua
ClientHelper.putBoolPrefs("EnableDoubleJumps", true)
```
That's what it takes to enable fly on all mini-games!

Now let's introduce the one and only: Thebigboy, a retired BG<sup>1</sup> official. At that time he was still working at Sandbox<sup>2</sup> and was one, if not the only admin that actually cared about the community. All other admins after him were disgusting me.

I was actually reporting everything to him. He replied almost every time I messaged him, asked me questions and gave me Gcubes on multiple occasions, he was clearly doing his job and very well. But if only, if only it was the case for rest of his team... Nothing was getting fixed, not even today.

During that time, I still had hopes but as you read through you'll slowly but surely understand that I no longer do.

You see, Thebigboy is an honest person unlike some other members of his team. Why am I saying that? One once claimed that some maps that they clearly imported from Minecraft were made by themselves and he even got the audacity to tell me that it's an original creation.

What a joke. Things are already heating up and I'm just getting started. I'm telling you. You are in for a ride.

1. Blockman GO for short
2. Sandbox (known as Gverse overseas): The company behind Blockman GO

# III. MORE MODS (2021)
Before going any further, let me introduce you to... Mr Dino!
<p align="center">
    <img src="/static/game_nightmare/bg_mrdino_meme.png" style="width: 66%; height: 66%;">
    <br>
    <i>I'll explain what I mean by 'hacking stuff' later on</i>
</p>

He's the second member of the squad. He was once a normal player until one day...

# INTERLUDE - WHO ARE BEHIND BLOCKMAN GO?

<p class="meta-info">Written by Liam | Status: Not finished</p>