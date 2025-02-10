import { AppBar, Toolbar, Button, IconButton, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <AppBar position="fixed" sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '64px' }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{ 
                fontWeight: 700,
                color: 'black',
                textDecoration: 'none'
              }}
            >
              Logo
            </Typography>
            
            {/* Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '32px' }}>
              <Button href="/destinations" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                Destinations
              </Button>
              <Button href="/travel-tips" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                Travel Tips
              </Button>
              <Button href="/explore" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                Explore
              </Button>
              <Button href="/blog" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                Blog
              </Button>
            </Box>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <IconButton color="default" aria-label="搜索">
              <SearchIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'black',
                color: 'white',
                borderRadius: '9999px',
                '&:hover': { bgcolor: 'black' }
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-6 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Discover the World's{' '}
            <span className="text-gray-600">Hidden Wonders</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Start an unforgettable journey, explore the world's most amazing hidden treasures
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full w-fit">
            Start Exploring
          </button>
        </div>
      </main>
    </div>
  );
}