repeat task.wait() until game.Players.LocalPlayer and game.Players.LocalPlayer.Character
if not game:IsLoaded() then
    game.Loaded:Wait()
end

print("Loader by Salinan - Mendeteksi game...")

local creatorId = game.CreatorId

-- DAFTAR GAME (isi ID asli dari game yg mau kamu target)
local daftarGame = {
    [537413528] = "https://raw.githubusercontent.com/username/repoLu/main/game1.lua",  -- Blox Fruits
    [4520749081] = "https://raw.githubusercontent.com/username/repoLu/main/game2.lua", -- Anime Fighters
}

if daftarGame[creatorId] then
    print("Game supported! Loading...")
    loadstring(game:HttpGet(daftarGame[creatorId]))()
else
    warn("Game tidak didukung. ID: " .. creatorId)
end
