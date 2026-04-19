print("Script Game 1 loaded!")

-- Pake UI Library Kavo
local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/xHeptc/Kavo-UI-Library/main/UiLibrary.lua"))()
local Window = Library.CreateLib("Script Game 1", "DarkTheme")

-- Tab Player
local PlayerTab = Window:NewTab("Player")
local PlayerSection = PlayerTab:NewSection("Fitur Player")

PlayerSection:NewSlider("WalkSpeed", "Speed", 500, 16, function(s)
    game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = s
end)

PlayerSection:NewSlider("JumpPower", "Jump", 500, 50, function(s)
    game.Players.LocalPlayer.Character.Humanoid.JumpPower = s
end)

PlayerSection:NewToggle("God Mode", "god", function(state)
    if state then
        local player = game.Players.LocalPlayer
        if player.Character then
            player.Character.Humanoid:BreakJoints()
            local god = Instance.new("BoolValue")
            god.Name = "godmode"
            god.Parent = player.Character
        end
    else
        if game.Players.LocalPlayer.Character:FindFirstChild("godmode") then
            game.Players.LocalPlayer.Character.godmode:Destroy()
        end
    end
end)

print("✅ Game 1 siap dipake!")
