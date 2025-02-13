import pygame, asyncio
from sys import exit


def change_room(room):
    global game_room
    if room == 'slideshow':
        game_room = 'slideshow'
    elif room == 'zeitung':
        game_room = 'zeitung'
    elif room == 'polizei_wand':
        game_room = 'polizei_wand'
    elif room == 'chemie_raum':
        game_room = 'chemie_raum'
    elif room == 'aufgabe_1':
        game_room = 'aufgabe_1'

class Zurück(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.original_image = pygame.image.load('graphics/zurück.png').convert_alpha()
        self.image = pygame.transform.rotozoom(self.original_image, 0, 1.2)
        self.rect = self.image.get_rect(center=(x, y))
        self.bigger = False
        self.clicked = False

    def check_hover(self):
        return self.rect.collidepoint(pygame.mouse.get_pos())

    def check_click(self):
        if self.check_hover() and pygame.mouse.get_pressed()[0]:
            if not self.clicked:
                self.clicked = True
                return True
        return False

    def reset_click(self):
        if not pygame.mouse.get_pressed()[0]:
            self.clicked = False

    def update(self, x):
        if self.check_hover() and not self.bigger:
            self.image = pygame.transform.rotozoom(self.original_image, 0, 1.8)
            self.rect = self.image.get_rect(center=self.rect.center)
            self.bigger = True
        elif not self.check_hover() and self.bigger:
            self.image = pygame.transform.rotozoom(self.original_image, 0, 1.2)
            self.rect = self.image.get_rect(center=self.rect.center)
            self.bigger = False

        if self.check_click():
            change_room(x)

        self.reset_click()

class Weiter(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.original_image = pygame.image.load('graphics/weiter.png').convert_alpha()  # Original image
        self.image = pygame.transform.rotozoom(self.original_image, 0, 1.2)  # Initial scale
        self.rect = self.image.get_rect(center=(x, y))
        self.bigger = False
        self.clicked = False

    def check_hover(self):
        return self.rect.collidepoint(pygame.mouse.get_pos())

    def check_click(self):
        if self.check_hover() and pygame.mouse.get_pressed()[0]:
            if not self.clicked:
                self.clicked = True
                return True
        return False

    def reset_click(self):
        if not pygame.mouse.get_pressed()[0]:
            self.clicked = False

    def update(self, x):
        if self.check_hover() and not self.bigger:
            self.image = pygame.transform.rotozoom(self.original_image, 0, 1.8)
            self.rect = self.image.get_rect(center=self.rect.center)
            self.bigger = True
        elif not self.check_hover() and self.bigger:
            self.image = pygame.transform.rotozoom(self.original_image, 0, 1.2)
            self.rect = self.image.get_rect(center=self.rect.center)
            self.bigger = False

        if self.check_click():
            change_room(x)

        self.reset_click()


class Sprechblase(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.original_image = pygame.image.load('graphics/Sprechblase.png').convert_alpha()  # Original image
        self.image = pygame.transform.rotozoom(self.original_image, 0, 0.8)  # Initial scale
        self.rect = self.image.get_rect(center=(x, y))




class Mini_pw(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.original_image = pygame.image.load('graphics/polizei_raum.jpg').convert_alpha()  # Original image
        self.image = pygame.transform.rotozoom(self.original_image, 0, 0.23)  # Initial scale
        self.rect = self.image.get_rect(center=(x, y))
        self.bigger = False
        self.clicked = False

    def check_hover(self):
        return self.rect.collidepoint(pygame.mouse.get_pos())

    def check_click(self):
        if self.check_hover() and pygame.mouse.get_pressed()[0]:
            if not self.clicked:
                self.clicked = True
                return True
        return False

    def reset_click(self):
        if not pygame.mouse.get_pressed()[0]:
            self.clicked = False

    def update(self, x):
        if self.check_hover() and not self.bigger:
            self.image = pygame.transform.rotozoom(self.original_image, 0, 0.3)
            self.rect = self.image.get_rect(center=self.rect.center)
            self.bigger = True
        elif not self.check_hover() and self.bigger:
            self.image = pygame.transform.rotozoom(self.original_image, 0, 0.23)
            self.rect = self.image.get_rect(center=self.rect.center)
            self.bigger = False

        if self.check_click():
            change_room(x)

        self.reset_click()

#class Alkan(pygame.sprite.Sprite):
#    def __init__(self):
#        super().__init__()


pygame.init()
screen_width = 1280
screen_height = 720
screen = pygame.display.set_mode((screen_width,screen_height), pygame.RESIZABLE)
pygame.display.set_caption("pygame1")
clock = pygame.time.Clock()
font = pygame.font.Font("font/Pixeltype.ttf", 50)


# Texte/ Hintergrund
ZEITUNG_surf = font.render('HIER ZEITUNG', False, (255, 255, 255))
ZEITUNG_rect = ZEITUNG_surf.get_rect(center=(screen_width / 2, screen_height / 2))

SLIDES_surf = font.render('HIER SLIDES', False, (255, 255, 255))
SLIDES_rect = ZEITUNG_surf.get_rect(center=(screen_width / 2, screen_height / 2))

polizei_raum = pygame.image.load("graphics/polizei_raum.jpg").convert_alpha()
polizei_raum = pygame.transform.rotozoom(polizei_raum, 0, 2)

chemie_raum = pygame.image.load("graphics/chemie_raum1.jpg").convert_alpha()
chemie_raum = pygame.transform.rotozoom(chemie_raum, 0, 1)
chemie_raum = pygame.transform.scale(chemie_raum, (screen_width* 0.8, screen_height))
chemie_raum = pygame.transform.rotozoom(chemie_raum, 0, 1.0)

# Sprites
weiter = pygame.sprite.GroupSingle()
weiter.add(Weiter(screen_width - 200, screen_height - 130))

sprechblase = pygame.sprite.GroupSingle()
sprechblase.add(Sprechblase(screen_width * 0.5, screen_height - 130))

mini_pw = pygame.sprite.GroupSingle()
mini_pw.add(Mini_pw(screen_width - 200, screen_height - 330))

zurück = pygame.sprite.GroupSingle()
zurück.add(Zurück(200, screen_height - 130))

game_room = 'polizei_wand'


async def main():

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT or (event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE):
                pygame.quit()
                exit()

            # how to access different rooms
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_0:
                    change_room('polizei_wand')
                elif event.key == pygame.K_z:
                    change_room('zeitung')
                elif event.key == pygame.K_s:
                    change_room('slideshow')
                elif event.key == pygame.K_c:
                    change_room('chemie_raum')
                elif event.key == pygame.K_1:
                    change_room('aufgabe_1')

        # different rooms
        if game_room == 'polizei_wand':
            screen.fill((50, 50, 100))
            screen.blit(polizei_raum, (0, 0))
            weiter.update('chemie_raum')
            weiter.draw(screen)
            zurück.update('slideshow')
            zurück.draw(screen)

        elif game_room == 'zeitung':
            screen.fill((61, 61, 61))
            screen.blit(ZEITUNG_surf, ZEITUNG_rect)
            weiter.update('slideshow')
            weiter.draw(screen)



        elif game_room == 'slideshow':
            screen.fill((61, 61, 61))
            screen.blit(SLIDES_surf, SLIDES_rect)
            weiter.update('polizei_wand')
            weiter.draw(screen)
            zurück.update('zeitung')
            zurück.draw(screen)

        elif game_room == 'chemie_raum':
            screen.fill((0, 0, 0))
            screen.blit(chemie_raum, (screen_width * 0.1, 0))
            zurück.update('polizei_wand')
            zurück.draw(screen)
            mini_pw.update('polizei_wand')
            mini_pw.draw(screen)
            sprechblase.draw(screen)

        elif game_room == 'aufgabe_1':
            screen.fill((255,255,255))
            mini_pw.update('polizei_wand')
            mini_pw.draw(screen)



        pygame.display.update()
        clock.tick(60)
        await asyncio.sleep(0)

asyncio.run(main())