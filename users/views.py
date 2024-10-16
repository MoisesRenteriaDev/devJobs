from django.shortcuts import render
from .models import Profile, Skill

# Create your views here.
def profiles(request):
    profiles = Profile.objects.all()
    context = {
        'profiles': profiles
    }
    return render(request, 'users/profiles.html', context)


def userProfile(request, pk):
    profile = Profile.objects.get(id=pk)
    
    topSkills = profile.skill_set.exclude(description__exact="")
    otherskills = profile.skill_set.filter(description="")
    
    context = {
        'profile': profile,
        'topSkills':topSkills,
        'otherskills':otherskills
    }
    return render(request, "users/user-profile.html", context)